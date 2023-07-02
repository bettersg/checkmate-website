import React from "react"
import styles from "../style";
import { faqIcon, qrFc, arrowButtonRight, arrowButtonUp } from "../assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from 'react';

const factchecks = () => {

  const navigate = useNavigate();
  const detailsRef = useRef({});
  const location = useLocation();
  const [isOpenMap, setIsOpenMap] = React.useState({});
  const [isOpen, setIsOpen] = React.useState({});

  const toggleDetails = (questionNumber, isOpen) => {
    setIsOpenMap({ ...isOpenMap, [questionNumber]: isOpen });
    if (isOpen) {
      navigate(`/faq#${questionNumber}`);
    }
  };

  useEffect(() => {
    // Get the fragment from the current URL
    const fragment = location.hash;

    // If a fragment exists, try to open the corresponding details element
    if (fragment) {
      const questionNumber = fragment.substr(1);
      const details = detailsRef.current[questionNumber];
      if (details) {
        details.open = true;
      }
    }
  }, [location]);

  return (
    <div id="faq" className="flex flex-col items-center">
      <div className="bg-checkPurple text-checkWhite w-full flex flex-col items-start px-12 py-8">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[36px] text-center">
          Fact Checks
        </h1>
        <p className="font-workSans text-xl">In this page, you will find the messages that we have fact-checked here</p>
      </div>

      <div className="flex space-y-6 px-12 pb-24 font-poppins xl:max-w-[1280px] w-full items-center">
        <div className="flex flex-col">
          filter button here
        </div>
        <div className="flex flex-grow w-full">
          <ScamCard content="asdf" />
        </div>
      </div>

    </div>
  );
};

const ScamCard = ({ title, description, metadata, content }) => {
  return (<div>
    <div className="flex flex-col rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="bg-checkCream rounded-t-md w-full p-5">{content}</div>
      <div className="bg-checkWhite rounded-b-md shadow-[0_-1px_4px_0_rgba(0,0,0,0.25)] p-5"></div>
    </div>
  </div>);
};

export default factchecks;
