import { useState } from "react";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/login");
        toast('Signed out successfully', {
          position: toast.POSITION.BOTTOM_CENTER
        })
    }).catch((error) => {
    // An error happened.
    console.log(error)
      toast.error('Error during logout, contact your admin', {
        position: toast.POSITION.BOTTOM_CENTER
      })
    });
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <ToastContainer />
      <Link to="/">
        <div className="flex flex-row gap-x-2 items-center">
          <img src={logo} width="64px"/>
          <span className="text-checkBlack text-xl font-extrabold">CheckMate</span>
        </div>
      </Link>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1 gap-x-2">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-xl ${
              active === nav.title ? "text-checkPurple" : "text-checkPurple"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {user ? 
      <Link to="/login">
        <div className="text-checkPurple font-poppins font-normal cursor-pointer text-xl sm:flex hidden" onClick={handleLogout}>Logout</div>
      </Link>
      :
      <Link to="/login">
        <div className="text-checkPurple font-poppins font-normal cursor-pointer text-xl sm:flex hidden">Login</div>
      </Link>
      }
      

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/** Mobile menu */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar border-4 border-checkPurple`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-checkBlack" : "text-checkBlack"
                } ${index === navLinks.length - 1 ? "mb-4" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
            <li
              key='login'
              className={`font-poppins font-medium cursor-pointer text-[16px] text-checkBlack mb-4"`}
            >
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
