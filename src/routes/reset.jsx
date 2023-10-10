import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const onReset = async (e) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset link sent!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      navigate('/login');
    } catch (err) {
      console.error(err);
      toast.error(err.message, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  return (
    <div
      id="reset"
      className="flex flex-col items-center justify-center min-h-[600px]"
    >
      <ToastContainer />
      <main>
        <section>
          <div>
            <p className="text-2xl font-poppins font-medium text-checkPrimary600 mb-8">
              {' '}
              Reset Your Password{' '}
            </p>

            <form className="flex flex-col gap-y-4">
              <div className="bg-checkWhite border border-checkPurple px-2 py-1 rounded-lg">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-checkWhite text-checkPurple"
                />
              </div>

              <div className="">
                <button
                  className="cursor-pointer text-checkWhite bg-checkPurple px-4 rounded-lg py-1"
                  onClick={onReset}
                >
                  Send me a password reset email
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reset;
