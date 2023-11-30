import React, { useEffect } from 'react';
import { teamMembers } from "../constants/index";
import { arrowSpiralDown, logoSimple, partnerHeader, profilePlaceholder } from "../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import OurImpact from "../components/OurImpact";


const About = () => {
  
  useEffect(() => {
    const scrollDelay = 100;

    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, scrollDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full bg-checkBG font-poppins text-checkBlack flex flex-col items-center">
      <div className="flex flex-col justify-center">
        <div className="xl:max-w-[1280px] w-full flex flex-col  mx-auto">
          <h1 className="font-bold text-[36px] md:text-[48px] text-checkShadeDark pb-8 pt-6 md:pt-24 w-full text-left">
            About Us
          </h1>

          <h1 className="font-medium font-workSans text-checkPrimary600 text-[36px] tracking-tight ss:tracking-normal">
            Our Mission Statement
          </h1>
          <p className="font-workSans font-medium text-[16px] md:text-[20px]">
            In a world where misinformation and scams are commonplace, CheckMate
            harnesses the power of artificial intelligence coupled with
            crowdsourcing intelligence through our CheckMates: a network of
            trusted volunteers who help verify any dubious messages that you might
            come across.
          </p>

          <h1 className="font-medium font-workSans text-checkPrimary600 text-[36px] mt-12 tracking-tight ss:tracking-normal">
            What is CheckMate?
          </h1>
          <p className="font-workSans font-medium text-[16px] md:text-[20px]">
            CheckMate is a crowdsourced system that monitors messages sent to
            our CheckMate bot, funnels those in need of verification to our
            CheckMates, and replies users once we are confident on our
            categorisation of the message. The CheckMate team has seen first-hand 
            the negative impact of misinformation and scams on our
            families, friends, across Singapore and the
            rest of the world. To do our part, we decided to fight this problem,{" "}
            <strong>one message at a time.</strong>
          </p>

          <h1 className="font-medium font-workSans text-checkPrimary600 text-[36px] mt-12 tracking-tight ss:tracking-normal">
            Who are the CheckMates?
          </h1>
          <p className="font-workSans font-medium text-[16px] md:text-[20px]">
            We rely on our CheckMates, a network of volunteers who help us vote
            on new messages that you send in to our CheckMate bot. Our
            CheckMates come from all walks of life, but they are united by a
            common purpose - to help counter misinformation and scams in the
            community.
          </p>

          {/** Our impact section */}
          <div className="xl:max-w-[1280px] md:w-full flex flex-col md:flex-row gap-x-12 md:px-12 py-12 items-center">
            <img src={logoSimple} className="w-1/4 p-4" alt="CheckMate" />
            <OurImpact />
          </div>
        </div>

        {/** Team members section */}
        <div className="xl:max-w-[1280px] w-full flex flex-col items-start px-6 md:px-0">
          <h1 className="w-full sm:w-3/4 md:w-1/2 text-[32px] md:text-[48px] font-bold font-poppins content-center">
            Meet our{" "}
            <span className="text-checkPrimary600">
              <span className="italic">diverse</span> and{" "}
              <span className="italic">multidisciplinary</span>
            </span>{" "}
            team of&nbsp;volunteers
          </h1>
          <p className="w-full sm:w-3/4 md:w-1/2 mt-4 text-workSans font-workSans text-[18px]">
            We are currently part of better.sg, a #TechForGood non-profit
            organisation. What brings us together is the drive to fight scams
            and misinformation one message at a time. Check out our profiles
            below!
          </p>
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="self-end my-10 hidden ss:block"
          >
            <p className="relative rounded-full tracking-wider border text-sm sm:text-2xl font-medium border-black py-5 px-10">
              Meet the bunch
              <img
                className="absolute top-[70%] -translate-x-[150%]"
                src={arrowSpiralDown}
              />
            </p>
          </motion.div>
          <motion.div
            animate={{ x: [0, 0, 0], y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="self-end mt-8 mb-16 ss:hidden"
          >
            <p className="relative rounded-full tracking-wider border text-sm sm:text-2xl font-medium border-black py-5 px-10">
              Meet the bunch
              <img
                className="absolute top-[130%] -translate-x-[30%] -rotate-12"
                src={arrowSpiralDown}
              />
            </p>
          </motion.div>
        </div>
        <div className="xl:max-w-[1280px] md:w-full w-full ss:w-[calc(100%/2-20px)] pt-12 flex flex-col ss:flex-row flex-wrap gap-x-6 gap-y-8 mx-auto pl-0 ss:pl-4 items-center justify-items-center mb-12">
          {teamMembers.map((member, index) => {
            return (
              <a
                href={member.linkedin}
                target="_blank"
                key={index}
                className="flex flex-col items-center justify-items-center mx-auto"
              >
                <img key={member.id} src={member.picture} className={`max-w-[289px] max-h-[308px] rounded-t-[36px] ${member.picture == profilePlaceholder ? "w-['85%'] px-4 pt-4 bg-checkCarouselRed": ""}`}/>
                <div className="flex flex-col items-center bg-checkWhite w-full p-4 rounded-b-[36px] shadow-2xl">
                  <div className="font-poppins text-lg font-bold">  
                    {member.name}
                  </div>
                  <div className="font-poppins text-md font-normal">
                    {member.title || ""}
                  </div>
                </div>
              </a>
            )}
          )}
        </div>

        {/** Partner */}
        {/*<div className="w-full xl:max-w-[1280px] flex flex-col">
          <a href="https://www.scamshield.org.sg/" target="_blank">
            <img src={partnerHeader} alt="CheckMate" className="" />
          </a>
          </div>*/} 
      </div>
    </div>
  );
};

export default About;
