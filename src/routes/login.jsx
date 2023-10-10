import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  setPersistence,
  inMemoryPersistence,
} from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login from '../assets/login.svg';

// const isDevelopment = process.env.NODE_ENV === 'development';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [user, loading, error] = useAuthState(auth);

  // function getCookie(name) {
  //   var dc = document.cookie;
  //   var prefix = name + '=';
  //   var begin = dc.indexOf('; ' + prefix);
  //   if (begin == -1) {
  //     begin = dc.indexOf(prefix);
  //     if (begin != 0) return null;
  //   } else {
  //     begin += 2;
  //     var end = document.cookie.indexOf(';', begin);
  //     if (end == -1) {
  //       end = dc.length;
  //     }
  //   }
  //   // because unescape has been deprecated, replaced with decodeURI
  //   //return unescape(dc.substring(begin + prefix.length, end));
  //   return decodeURI(dc.substring(begin + prefix.length, end));
  // }

  const onLogin = (e) => {
    e.preventDefault();
    setPersistence(auth, inMemoryPersistence);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        // const user = userCredential.user;
        const token = await userCredential.user?.getIdToken();

        // const csrfToken = getCookie('csrfToken');

        await fetch('https://checkmate.sg/api/login', {
          method: 'POST',
          credentials: 'include', // Because a cookie will be sent by the server, this must be included in order to have the cookie be automatically saved by the browser
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        })
          .then(async function () {
            // const csrfToken = getCookie('csrfToken');
            //console.log('csrfToken', csrfToken)
            //console.log('user', user)
            /*const messages = await fetch("https://checkmate.sg/api/messages", {
              method: "GET",
              credentials: "include",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            });
            console.log(await messages.json());*/
          })
          .catch(function (error) {
            console.log(error);
          });
        navigate('/dashboard');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex flex-wrap-reverse self-center items-center max-w-[1280px] w-full sm:px-24 py-6 px-4">
      <img src={login} alt="checkMate" className="mx-auto relative z-[5]" />

      <div
        id="login"
        className="flex flex-col items-center justify-center max-w-sm mx-auto"
      >
        <ToastContainer />
        <div>
          <p className="text-5xl font-poppins font-bold leading-normal text-checkBlack mb-2">
            Log In to CheckMate
          </p>

          <form className="flex flex-col gap-y-3">
            <div className="bg-checkWhite border border-checkGrey px-4 py-4 rounded-md">
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-checkWhite text-checkBlack font-medium"
              />
            </div>

            <div className="bg-checkWhite border border-checkGrey px-4 py-4 rounded-md">
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-checkWhite text-checkBlack font-medium"
              />
            </div>
            <div className="text-checkPurple font-poppins text-sm text-right">
              <Link to="/reset">Forgot Password?</Link>
            </div>

            <div className="">
              <button
                className="cursor-pointer text-checkWhite bg-checkLightPurple px-4 rounded-md py-3 w-full font-poppins font-bold text-2xl"
                onClick={onLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
