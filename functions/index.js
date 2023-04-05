const functions = require("firebase-functions"),
      firebaseAdmin = require("firebase-admin").default,
      express = require("express"),
      cors = require("cors"),
      helmet = require("helmet"),
      cookieParser = require("cookie-parser"),
      bodyParser = require("body-parser");

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

// Export the Express application as a single Firebase Function named "api" and add the vpc connector
app.use("/api", router);
exports.api = functions
                  .runWith({
                    timeoutSeconds: 300
                  })
                  .https
                  .onRequest(app);