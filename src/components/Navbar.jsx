import React from "react";
import { useState } from "react";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import ButtonCTAWhatsapp from "./ButtonCTAWhatsapp";

import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cookies from "nookies";

import { FaLanguage } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const { i18n } = useTranslation();

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
    setActive(nav);
    setToggle(false);
  };

  // making sure we have the right active nav based on the url
  navLinks.forEach((nav) => {
    if (window.location.pathname == "/" + nav.id && active != nav.title) {
      setActive(nav.title);
    }
  });

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <ToastContainer />
      {/** Logo */}
      <Link to="/">
        <div className="flex flex-row gap-x-2 items-center">
          <img src={logo} width="64px" />
        </div>
      </Link>

      {/** Language switch */}
      <FaLanguage
        className="text-3xl cursor-pointer"
        onClick={() =>
          i18n.resolvedLanguage === "en"
            ? i18n.changeLanguage("cn")
            : i18n.changeLanguage("en")
        }
      />
      <p>{i18n.resolvedLanguage}</p>

      {/** Navbar menu options */}
      <ul className="list-none sm:flex hidden justify-center items-center flex-1 gap-x-2">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-workSans cursor-pointer text-xl pb-2 font-medium ${
              active === nav.title
                ? "text-checkPrimary600 border-b-4 border-checkPrimary600"
                : "text-checkShadeDark"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <Link to={`${nav.id === "home" ? "" : nav.id}`}>
              {t(`${nav.id !== "" ? nav.id : "home"}`)}{" "}
            </Link>
          </li>
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
              <li
                key={nav.id}
                className={`py-4 font-workSans font-medium cursor-pointer text-[20px] ${
                  active === nav.title
                    ? "text-checkWhite bg-checkPrimary600 rounded-[40px] w-full text-center bg-opacity-100"
                    : "text-checkBlack"
                } ${index === navLinks.length - 1 ? "mb-4" : "mb-4"}`}
                onClick={() => handleMobileClick(nav.title)}
              >
                <Link to={`${nav.id}`}>
                  {t(`${nav.id !== "" ? nav.id : "home"}`)}
                </Link>
              </li>
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

export const navbarTranslations = {
  en: {
    "nav.about": "About Us",
    "nav.message-database": "Message Database",
    "nav.contact": "Contact Us",
  },
  cn: {
    "nav.about": "关于我们",
    "nav.message-database": "消息库",
    "nav.contact": "联系我们",
  },
};

export default Navbar;
