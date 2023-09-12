const { request } = require("express");

const functions = require("firebase-functions"),
      firebaseAdmin = require("firebase-admin").default,
      express = require("express"),
      cors = require("cors"),
      helmet = require("helmet"),
      cookieParser = require("cookie-parser"),
      bodyParser = require("body-parser"),
      Typesense = require("typesense"),
      ts_credentials = require("./typesense.json");

// Initialise an instance of Express and a router
const app = express(),
      router = express.Router();

// Add the Helmet middleware
app.use(helmet());

// Allow cross-origin requests
app.use(cors({ origin: true, credentials: true }));

// Add the cookie parser middleware
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({  extended: true  }));
app.use(attachCsrfToken('/', 'csrfToken', (Math.random()* 100000000000000000).toString()));

function attachCsrfToken(url, cookie, value) {
  return function(req, res, next) {
    if (req.url === url) {
      res.cookie(cookie, value);
    }
    next();
  }
}

app.use(function(req, res, next) {  
  res.header('Cache-Control', 'private')
  next();
}); 

// Initialise the Firebase Admin instance with the Firebase functions config supplied by Firebase. If not available (i.e. in the development environment, use the serviceAccount local file)
firebaseAdmin.initializeApp(functions.config().firebase || { credential: firebaseAdmin.credential.cert(require("./serviceAccount.json")) });
// initialize the checkmate website firestore
const firestore = firebaseAdmin.firestore();

// connect securely to the checkmate backend firestore
const backend = firebaseAdmin.initializeApp( { credential: firebaseAdmin.credential.cert(require("./serviceAccount_backend.json")) } , "WhatsApp Webhook Handler");
const firestore_backend = backend.firestore();

// initialize the typesense client
console.log(ts_credentials.hostname + '.a1.typesense.net')
let ts_client = new Typesense.Client({
  'nodes': [{
    'host': ts_credentials.hostname + '.a1.typesense.net',
    'port': '443',
    'protocol': 'https'
  }],
  'apiKey': ts_credentials.api_key,
  'connectionTimeoutSeconds': 3
})

/**
 * Exchange a short-lived (1 hour) token (a JWT) for a long-lived (2 weeks) session
 * token (also a JWT) to saved as a cookie. If the short-lived token is valid, a
 * long-lived (2 weeks) session cookie (JWT) is returned. Otherwise, an HTTP 401
 * UNAUTHORIZED is returned
 */
router.post("/login", async (req, res) => {

  // Destructure the short-lived session cookie
  const { token } = req.body;

  // If no short-lived session token was provided in the body of the request, return an HTTP 400 BAD REQUEST
  if (!token) return res.status(400).json({ error: "`token` missing in body" });

  try {

    // Set the session expiration to two weeks (in milliseconds)
    const expiresIn = 1209600000;

    // Generate a new session cookie from the provided JWT
    const sessionCookie = await firebaseAdmin.auth().createSessionCookie(token, { expiresIn });

    // Verify the supplied JSON Web Token
    const decodedClaims = await firebaseAdmin.auth().verifySessionCookie(sessionCookie);

    // Log the cookie creation
    functions.logger.log(`Created new 2-week session cookie for user "${decodedClaims.email}" (ID: ${decodedClaims.user_id})`);

    // Create an HTTP-only cookie (for this Firebase function's domain) to send to the client
    res.cookie("__session", sessionCookie, {
      expires: new Date(new Date().getTime() + expiresIn), 
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: req.get('origin')
    });

    // Return an HTTP 204 NO CONTENT response
    return res.sendStatus(204);
  } catch (error) {

    // Log the stacktrace
    functions.logger.error(error);
    return res.sendStatus(401);
  }
});


/**
 * Log out a session cookie from a provided JSON Web Token (JWT). If the token is
 * valid, the token's user account is returned. Otherwise, return an HTTP 401.
 * 
 * See: https://firebase.google.com/docs/auth/admin/manage-cookies#sign_out
 */
router.post("/logout", async (req, res) => {

  // Destructure the session cookie (a long-lived JWT that expires in two weeks)
  const { __session } = req.cookies;

  try {

    // If not session cookie is present, throw an error
    if (!__session) throw new Error("No session cookie present");

    // Verify the supplied JSON Web Token
    const decodedClaims = await firebaseAdmin.auth().verifySessionCookie(__session, true);
    functions.logger.info(decodedClaims)

    // Revoke refresh tokens for the associated session
    await firebaseAdmin.auth().revokeRefreshTokens(decodedClaims.sub);

    // Log the session logout
    functions.logger.log(`Logged out user "${decodedClaims.email}" (ID: ${decodedClaims.user_id})`);

    // Create an HTTP-only empty cookie (for this Firebase function's domain) to send to the client to effectively delete the cookie from the browser
    res.cookie("__session", "", {
      expires: new Date(0), // Any date in the past is acceptable for cookie deletion
      httpOnly: false,
      secure: true,
      sameSite: "lax",
      domain: req.get("x-forwarded-host")
    });

    // Return an HTTP 204 NO CONTENT when the user has been successfully logged out of their session
    return res.sendStatus(204);
  } catch (error) {

    // Log the stacktrace
    functions.logger.error(error);
    return res.sendStatus(401);
  }
});


router.post("/validate/session", async (req, res) => {

  // Destructure the session cookie (a long-lived JWT that expires in two weeks)
  const { __session } = req.cookies;
  try {

    // If not session cookie is present, throw an error
    if (!__session) throw new Error("No session cookie present");

    // Verify the supplied JSON Web Token
    const decodedClaims = await firebaseAdmin.auth().verifySessionCookie(__session, true);


    // Log the authenticated user's information
    functions.logger.log(`Decoded session for user "${decodedClaims.email}" (ID: ${decodedClaims.user_id})`);

    // Return the user account data from the decoded session
    return res.json(decodedClaims);
  } catch (error) {

    // Log the stacktrace
    functions.logger.error(error);
    return res.sendStatus(401);
  }
});



router.get("/messages", async (req, res) => {
    // Destructure the session cookie (a long-lived JWT that expires in two weeks)
    const { __session } = req.cookies;
    try {
        // verify that the session cookie is valid
        const decodedClaims = await firebaseAdmin.auth().verifySessionCookie(__session, true);

        // set the collection we want to query
        //const messagesRef = collection(firestore_backend, "messages");
        
        // make a query against the customer_id key that we get from the cookie
        functions.logger.log(decodedClaims.user_id)
        const snapshot = await firestore_backend.collection("messages").limit(20).get();
        
        //const snapshot = await messagesRef.orderBy('firstTimestamp', 'desc').limit(20).get();
        
        // if result empty we send 204, otherwise we send 200 with the list of lists
        if (snapshot.empty) {
            functions.logger.log('GET messages returned no document!');
            return res.sendStatus(204)
        } else {
            var docs = snapshot.docs.map(doc => doc.data());
            //functions.logger.info(JSON.stringify(docs))
            return res.status(200).send(JSON.stringify(docs));
        }
    } catch (error) {
        functions.logger.error('Error: ', error)
        return res.sendStatus(203)
    }
});

/*router.get("/publicmessages", async (req, res) => {
    try {
      const snapshot = await firestore_backend.collection("messages").orderBy('firstTimestamp', 'desc').limit(20).get();
     
      // if result empty we send 204, otherwise we send 200 with the list of lists
      if (snapshot.empty) {
          functions.logger.log('GET messages returned no document!');
          return res.sendStatus(204)
      } else {
          var docs = snapshot.docs.map(doc => doc.data());
          //functions.logger.info(JSON.stringify(docs))
          return res.status(200).send(JSON.stringify(docs));
      }
  } catch (error) {
      functions.logger.error('Error: ', error)
      return res.sendStatus(203)
  }
});*/

/*router.get("/publicmessages", async (req, res) => {
  try {
    let searchParameters = {
      'q'         : '*',
      'query_by'  : 'text',
      'sort_by'   : 'firstReceivedUnixTimestamp:desc',
      'filter_by' : 'category:!=unsure',
      'limit'     : 20,
      'limit_hits': 20,
      'per_page': 20
    }

    ts_client.collections('messagesProd')
      .documents()
      .search(searchParameters)
      .then(function (searchResults) {
        // if result empty we send 204, otherwise we send 200 with the list of lists
        if (searchResults.empty) {
          functions.logger.log('GET messages returned no document!');
          return res.sendStatus(204)
        } else {
            return res.status(200).send(JSON.stringify(searchResults));
        }
      })
} catch (error) {
    functions.logger.error('Error: ', error)
    return res.sendStatus(203)
}
});*/

router.get("/publicmessages", async (req, res) => {
  // get the query parameters
  if (req.query) {
    if (req.query['search']) {var search = req.query['search']} else {var search = "*"}
    if (req.query['categories']) {var categories = req.query['categories']} else {var categories = ""}
    if (req.query['status']) {var status = req.query['status']; console.log('status', status)} else {var status = ""}
    if (req.query['report_count']) {var report_count = req.query['report_count']} else {var report_count = ""}
    if (req.query['report_date_start']) {
      var report_date_start = req.query['report_date_start']
      var date_filter_start = "firstReceivedUnixTimestamp:>" + report_date_start
    } else {var report_date_start = ""}  
    if (req.query['report_date_end']) {
      var report_date_end = req.query['report_date_end']
      var date_filter_end = "firstReceivedUnixTimestamp:<" + report_date_end
    } else {var report_date_end = ""}  
  }

  // build the filter query
  var filter = 'category:=[' + categories + ']'

  switch(status) {
    case 'reviewed': filter = filter + ' && isAssessed:=true'; break;
    case 'reviewing': filter = filter + ' && isAssessed:=false'; break;
    default: filter = filter + ' ';
  }

  switch(report_count) {
    case '1': filter = filter + ' && instanceCount:<=5'; break;
    case '6': filter = filter + ' && instanceCount:>5 && instanceCount:<=10'; break;
    case '11': filter = filter + ' && instanceCount:>10 && instanceCount:<=20'; break;
    case '20': filter = filter + ' && instanceCount:>20'; break;
    default: filter = filter + ' ';
  }

  if (date_filter_start && date_filter_start != "") { 
    filter = filter + ' && ' + date_filter_start;
    if (date_filter_end && date_filter_end != "") {
      filter = filter + ' && ' + date_filter_end
    }
  }

  console.log('filter', filter)

  // execute the query
  try {
    let searchParameters = {
      'q'         : search,
      'query_by'  : 'text',
      'sort_by'   : 'firstReceivedUnixTimestamp:desc',
      'filter_by' : filter,
      'limit'     : 20,
      'limit_hits': 20,
      'per_page': 20
    }

    ts_client.collections('messagesProd')
      .documents()
      .search(searchParameters)
      .then(function (searchResults) {
        // if result empty we send 204, otherwise we send 200 with the list of lists
        if (searchResults.empty) {
          functions.logger.log('GET messages returned no document!');
          return res.sendStatus(204)
        } else {
            return res.status(200).send(JSON.stringify(searchResults));
        }
      })
} catch (error) {
    functions.logger.error('Error: ', error)
    return res.sendStatus(203)
}
});

// Export the Express application as a single Firebase Function named "api" and add the vpc connector
app.use("/api", router);
exports.api = functions
                  .runWith({
                    timeoutSeconds: 300
                  })
                  .https
                  .onRequest(app);