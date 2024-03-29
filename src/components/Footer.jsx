import styles from "../style";
import { socialMedia } from "../constants";
import { bettersg, scamshield } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => (
  <section
    id="footer"
    className={`w-full pt-[40px] md:pt-14 pb-14 px-16 flex justify-center items-center flex-col bg-checkBGFooter text-checkWhite font-poppins`} 
  >
    <div className="xl:max-w-[1280px] w-full flex flex-col md:flex-row gap-y-8 justify-center">
      <div className="w-full md:w-1/4">
        <div className="text-[20px]">CheckMate</div>
        <div className="flex flex-col pl-4 pt-4 ss:pt-8 text-[16px] gap-y-3 ss:gap-y-6">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          {/*<Link to="/message-database">Message Database</Link>*/}
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      <div className="w-full md:w-1/4">
        <div className="text-[20px]">Legal</div>
        <div className="pl-4 pt-4 ss:pt-8 text-[16px]">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>

      <div className="w-full md:w-1/4 hidden ss:block">
        <div className="">&nbsp;</div>
      </div>

      <div className="w-full md:w-1/4 flex flex-col gap-y-4 ss:gap-y-8">
        <div className="text-[20px]">Find us on</div>
        <div className="flex flex-col gap-y-3 ss:gap-y-6 text-[16px]">
          {socialMedia.map((social, index) => (
            <a key={index} href={social.link} target="_blank" className="flex flex-row">
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
                />
                <span className="text-[16px]">{social.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="flex flex-row flex-wrap max-w-[1280px] w-full mt-16 font-normal">
      © 2023 CheckMate
    </div>
  </section>
);

export default Footer;
