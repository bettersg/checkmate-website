import styles from "../style";
import { teamMembers } from "../constants/index"
import { scamshield1, scamshield2 } from "../assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className={`flex flex-col items-start`}>
      <div className="bg-checkPurple text-checkWhite w-full flex flex-col items-start px-12 py-8">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[36px] text-center">
          About Us
        </h1>
      </div>

      {/** Mission statement section */}
      <div className="bg-checkWhite text-checkBlack w-full flex flex-col gap-x-4 p-12 items-center">
        <div className="flex flex-col xl:max-w-[1280px] w-full mx-auto">
          <h1 className="text-checkPurple font-poppins font-bold ss:text-[32px] text-[24px]">Our Mission Statement</h1>
          <p className="font-poppins text-xl">In a world where misinformation and scams are commonplace, CheckMate harnesses the power of crowdsourcing with our CheckMates, a network of trusted volunteers who help verify dubious messages that you might come across.</p>

          <div className="flex flex-col md:flex-row w-full pt-12 gap-x-8 pb-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-checkPurple font-poppins font-bold ss:text-[24px] text-[20px] pb-2">What is CheckMate?</h2>
              <p className="text-xl">CheckMate is a crowdsourced system that monitors messages sent in to our CheckMate bot, funnels those that need verification to our CheckMates, and replies users once we are confident on our categorisation of the message. It was borne out of a mix of boredom (on our part), and widespread misinformation during the pandemic. More recently, we decided to take on scams as well, due to their increasing prevalance in Singapore and around the world.</p>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-checkPurple font-poppins font-bold ss:text-[24px] text-[20px] pb-2">Who are the CheckMates?</h2>
              <p className="text-xl">We rely on our CheckMates, a network of volunteers who help us vote on new messages that are received by the CheckMate bot. Our CheckMates come from all walks of life, but they are united by a common purpose - to help counter misinformation and scams in the community.</p>
            </div>
          </div>
        </div>
      </div>


      {/** Impact section */}
      <div className="bg-checkPurple text-checkWhite w-full flex flex-col md:flex-row gap-x-8 px-12 py-8 items-center">
        <div className="flex flex-col md:flex-row xl:max-w-[1280px] w-full mx-auto">
          <div className="w-full md:w-1/2 pt-12 pb-8">
            <h2 className="font-bold ss:text-[36px] text-[24px] pb-8">Our Impact</h2>
            <p className="text-lg md:pr-8">We've just started for now, but we hope to make a real dent on the problem of misinformation and scams, both in Singapore and around the world.</p>
          </div>
          {/* <div className="w-full md:w-1/2 flex flex-col py-4 items-center pt-20">
            <div className="flex flex-col gap-y-2 w-[32rem]">
              <p className="w-full text-xl text-left">In 2022, Singapore had</p>
              <p className="w-full text-4xl font-bold text-right">31 728 cases</p>
              <p className="w-full text-xl text-left">which resulted in</p>
              <p className="w-full text-4xl font-bold text-right">$660.7 million in losses</p>
            </div>
          </div> */}
        </div>
      </div>


      {/** Team members section */}
      <div className="bg-checkWhite text-checkPurple w-full flex flex-col gap-y-4 px-12 py-8 items-center">
        <div className="flex flex-col xl:max-w-[1280px] w-full gap-y-4">
          <h1 className="text-checkPurple font-poppins font-bold ss:text-[32px] text-[24px]">Our Team</h1>
          <h2 className="text-checkPurple font-bold ss:text-[24px] text-[20px]">CheckMate Team</h2>
          <p className="font-poppins text-xl">We're a diverse and multidisciplinary bunch of volunteers under the #TechForGood non-profit, better.sg. What brings us together is the drive to fight scams and misinformation one message at a time! Check out our individual LinkedIn pages below! </p>

          <div className="pt-12 flex flex-row flex-wrap gap-x-24 gap-y-8">

            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-y-2">
                <img key={member.id} src={member.picture} />
                <span className="font-poppins text-md font-semibold">{member.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/** Partners section */}
      <div className="w-full flex flex-col md:flex-row px-12 items-center justify-center  pt-20 pb-24">
        <div className="flex flex-col md:flex-row xl:max-w-[1280px] w-full gap-x-4">
          <div className="w-2/3 flex flex-col gap-y-4">
            <h1 className="text-checkPurple font-poppins font-bold ss:text-[32px] text-[24px]">Our Partner</h1>
            <h2 className="text-checkPurple font-bold ss:text-[24px] text-[20px]"><a href="https://www.scamshield.org.sg/">ScamShield</a></h2>
            <p className="font-poppins text-xl">We're partnering with ScamShield, an anti-scam product developed by the National Crime Prevention Council and Open Government Products in collaboration with the Singapore Police Force. You can find out more about our collaboration <Link to="/faq#how-collaborate-with-scamshield">here</Link>.</p>
          </div>
          <a href="https://www.scamshield.org.sg/" className="w-1/3 flex flex-col items-center px-8">
            <img src={scamshield1} />
            <img src={scamshield2} />
          </a>
        </div>
      </div>

    </div>
  );
};

export default About;
