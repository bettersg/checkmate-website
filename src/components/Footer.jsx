import styles from "../style";
import { socialMedia } from "../constants";
import { bettersg, scamshield } from "../assets"
import { Link } from "react-router-dom"

const Footer = () => (
  <section id="footer" className={`w-full sm:py-10 py-2 px-16 flex justify-center items-center flex-col bg-gray-500 text-checkWhite font-poppins`}>
    
    
    <div className="xl:max-w-[1280px] w-full flex flex-col md:flex-row justify-center">

      <div className="w-full md:w-1/4">
        <div className="">CheckMate</div>
        <div className="flex flex-col pl-4 pt-8 text-xs gap-y-6">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/message-database">Message Database</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      
      <div className="w-full md:w-1/4">
        <div className="">Legal</div>
        <div className="pl-4 pt-8 text-xs">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>

      <div className="w-full md:w-1/4">
        <div className="">&nbsp;</div>
      </div>

      <div className="w-full md:w-1/4 flex flex-col gap-y-8">
        <div className="">Find us on</div>
        <div className="flex flex-col gap-y-6">
          {socialMedia.map((social, index) => (
            <div className="flex flex-row">
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
                onClick={() => window.open(social.link)}
              />
              <span className="text-xs">{social.text}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
    
    

    <div className="flex max-w-[1280px] w-full mt-16 font-normal">
      Checkmate. A <a href="https://better.sg" target="_blank">better.sg</a>&nbsp;Initiative © 2023 CheckMate
    </div>    

  </section>
);

export default Footer;
