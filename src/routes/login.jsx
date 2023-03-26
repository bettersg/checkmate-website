import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";



const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
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
                        </form>
                                                   
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Login;
