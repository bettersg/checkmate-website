import React, {useState} from 'react';
import {  signInWithEmailAndPassword, setPersistence, inMemoryPersistence  } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const isDevelopment = process.env.NODE_ENV === "development";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);

    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else
        {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
            end = dc.length;
            }
        }
        // because unescape has been deprecated, replaced with decodeURI
        //return unescape(dc.substring(begin + prefix.length, end));
        return decodeURI(dc.substring(begin + prefix.length, end));
    }

    const onLogin = (e) => {
        e.preventDefault();
        setPersistence(auth, inMemoryPersistence);
        signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            const token = await userCredential.user?.getIdToken();

            const csrfToken = getCookie('csrfToken');

            await fetch("https://checkmate.sg/api/login", {
                method: "POST",
                credentials: "include", // Because a cookie will be sent by the server, this must be included in order to have the cookie be automatically saved by the browser
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token })
            }).then(async function (response) {
                const csrfToken = getCookie('csrfToken');
                //console.log('csrfToken', csrfToken)
                //console.log('user', user)
                const messages = await fetch("https://checkmate.sg/api/messages", {
                method: "GET",
                credentials: "include", 
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
                
                })
                console.log(await messages.json())
            })
            .catch(function (error) {
                console.log(error);
            });
            navigate("/dashboard")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

    return (
        <div id="login" className="flex flex-col items-center justify-center min-h-[600px]">
            <ToastContainer />
            <main >        
                <section>
                    <div>                                            
                        <p className="text-2xl font-poppins font-semibold text-checkPurple mb-8"> Checkers Login </p>                       
                                                       
                        <form className="flex flex-col gap-y-4">                                              
                            <div className="bg-checkWhite border border-checkPurple px-2 py-1 rounded-lg">
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Your Email Address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className="bg-checkWhite text-checkPurple"
                                />
                            </div>

                            <div className="bg-checkWhite border border-checkPurple px-2 py-1 rounded-lg">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Your Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className="bg-checkWhite text-checkPurple"
                                />
                            </div>
                                                
                            <div className="">
                                <button     
                                    className="cursor-pointer text-checkWhite bg-checkPurple px-4 rounded-lg py-1"
                                    onClick={onLogin}                                  
                                >      
                                    Login                                                                  
                                </button>
                            </div>    

                            <div className='underline text-checkPurple text-sm'>
                                <Link to="/reset">Forgot your password?</Link>
                            </div>                           
                        </form>
                                                   
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Login;
