import styles from "../style";
import { teamMembers } from "../constants/index";
import { logoSimple, partnerHeader } from "../assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full bg-checkBG font-poppins text-checkBlack flex flex-col items-center">
      <div className="flex flex-col justify-center">
        <div className="xl:max-w-[1280px] w-full flex flex-col px-10 md:px-20 mx-auto">
          <h1 className="font-bold text-[48px] text-checkShadeDark pb-8 pt-6 md:pt-24">
            About Us
          </h1>
          
          <h1 className="font-medium font-workSans text-checkPrimary600 text-[36px]">
            Our Mission Statement
          </h1>
          <p className="font-workSans font-medium text-[20px]">
            In a world where misinformation and scams are commonplace, CheckMate
            harnesses the power of artificial intelligence coupled with
            crowdsourcing intelligence through our CheckMates: a network of
            trusted volunteers who help verify dubious messages that you might
            come across.
          </p>

          <h1 className="font-medium font-workSans text-checkPrimary600 text-[36px] mt-12">
            What is CheckMate?
          </h1>
          <p className="font-workSans font-medium text-[20px]">
            CheckMate is a crowdsourced system that monitors messages sent to
            our CheckMate bot, funnels those in need of verification to our
            CheckMates, and replies users once we are confident on our
            categorisation of the message. The CheckMate team has seen really
            close the negative impact of misinformation and scams in our
            families, friends, and society as a whole across Singapore and the
            rest of the world. We had enough and decided to bring it to and end,{" "}
            <strong>one message at a time.</strong>
          </p>

          <h1 className="font-medium font-workSans text-checkPrimary600 text-[36px] mt-12">
            Who are the CheckMates?
          </h1>
          <p className="font-workSans font-medium text-[20px]">
            We rely on our CheckMates, a network of volunteers who help us vote
            on new messages that you send in to our CheckMate bot. Our
            CheckMates come from all walks of life, but they are united by a
            common purpose - to help counter misinformation and scams in the
            community.
          </p>

          {/** Our impact section */}
          <div className=" md:w-full flex flex-col md:flex-row gap-x-12 md:px-12 py-12 items-center">
            <img src={logoSimple} className="w-1/4 p-4" alt="CheckMate" />
            <div className="w-full md:w-3/4 bg-checkWhite  shadow-2xl px-12 py-8 rounded-carousel flex flex-col gap-y-4">
              <h2 className="font-bold ss:text-[48px] text-[36px] text-checkPrimary600">
                Our Impact
              </h2>
              <p className="text-lg md:pr-8 text-gray-700">
                We've just started for now, but we hope to make a real dent on
                the problem of misinformation and scams, both in Singapore and
                around the world.
              </p>
            </div>
          </div>

        </div>

        {/** Team members section */}
        <div className="xl:max-w-[1280px] w-full flex flex-col items-start">
          <h1 className="w-3/4 md:w-1/2 text-[32px] md:text-[48px] font-bold font-poppins content-center">
            Meet our{" "}
            <span className="text-checkPrimary600">
              <span className="italic">diverse</span> and{" "}
              <span className="italic">multidisciplinary</span>
            </span>{" "}
            team of volunteers
          </h1>
          <p className="w-1/2 mt-4 text-workSans font-workSans text-[18px]">
            We are currently part of better.sg, a #TechForGood non-profit
            organisation. What brings us together is the drive to fight scams
            and misinformation one message at a time. Check out our profiles
            below!
          </p>
        </div>
        <div className="xl:max-w-[1280px] md:w-full w-[calc(100%/2-20px)] pt-12 flex flex-row flex-wrap gap-x-6 gap-y-8 mx-auto pl-4 items-center justify-items-center">
          {teamMembers.map((member, index) => (
            <a
            href={member.linkedin}
            target="_blank"
            key={index}
            className="flex flex-col items-center justify-items-center mx-auto"
          >
              <img key={member.id} src={member.picture} />
              <div className="flex flex-col items-center bg-checkWhite w-full p-2 rounded-b-[36px] shadow-2xl">
                <div className="font-poppins text-lg font-bold">
                  {member.name}
                </div>
                <div className="font-poppins text-md font-normal">
                  {member.title || ""}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/** Partner */}
        <div className="w-full xl:max-w-[1280px] flex flex-col">
          <a href="https://www.scamshield.org.sg/" target="_blank">
            <img src={partnerHeader} alt="CheckMate" className="" />
          </a>
        </div>

      </div>
        
    </div>
  );
};

export default About;
