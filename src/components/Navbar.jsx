import React from "react";
import { useState } from "react";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import ButtonCTAWhatsapp from "./ButtonCTAWhatsapp";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cookies from "nookies";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        toast("Signed out successfully", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        cookies.destroy(null, "session");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        toast.error("Error during logout, contact your admin", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  };

  const handleMobileClick = (nav) => {
    setToggle(false);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <ToastContainer />
      {/** Logo */}
      <Link to="/">
        <div className="flex flex-row gap-x-2 items-center">
          <img src={logo} width="64px" />
        </div>
      </Link>

      {/** Navbar menu options */}
      <ul className="list-none sm:flex hidden justify-center items-center flex-1 gap-x-2">
        {navLinks.map((nav, index) => (
          <NavLink
            key={nav.id}
            to={`${nav.id}`}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-checkPrimary600 border-b-4 border-checkPrimary600"
                  : "text-checkShadeDark"
              } font-workSans cursor-pointer text-xl pb-2 font-medium 
              ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`
            }
          >
            {nav.title}
          </NavLink>
        ))}
      </ul>

      {/** Call to action */}
      <div className="hidden sm:block">
        <ButtonCTAWhatsapp link="https://ref.checkmate.sg/add?utm_source=website&utm_medium=navbar" />
      </div>

      {/** {user ? 
        <div className="text-checkPurple font-poppins font-normal cursor-pointer text-xl sm:flex hidden" onClick={handleLogout}>Logout</div>
      :
      <Link to="/login">
        <div className="text-checkPurple font-poppins font-normal cursor-pointer text-xl sm:flex hidden">Login</div>
      </Link>
      } 
      */}

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
            !toggle ? "hidden" : "absolute"
          } p-6 bg-checkBG opacity-95 top-24 left-0 w-full h-full`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <NavLink
                key={nav.id}
                to={`${nav.id}`}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-checkPrimary600 border-b-4 border-checkPrimary600"
                      : "text-checkShadeDark"
                  } py-4 font-workSans font-medium cursor-pointer text-[20px] 
                ${index === navLinks.length - 1 ? "mb-4" : "mb-4"}`
                }
                onClick={() => handleMobileClick(nav.title)}
              >
                {nav.title}
              </NavLink>
            ))}
            {user ? (
              <li
                key="logout"
                className={`font-workSans py-4 font-medium cursor-pointer text-[20px] text-checkBlack mb-4"`}
                onClick={handleLogout}
              >
                Logout
              </li>
            ) : (
              <li
                key="login"
                className={`font-workSans py-4 font-medium cursor-pointer text-[20px] text-checkBlack mb-4"`}
              >
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
