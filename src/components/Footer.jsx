import styles from "../style";
import { socialMedia } from "../constants";
import { bettersg, scamshield } from "../assets"
import { Link } from "react-router-dom"

const Footer = () => (
  <section id="footer" className={`w-full ${styles.paddingY} px-16 flex-col bg-checkPurple`}>
    <div className="text-checkWhite w-full flex justify-between items-center md:flex-row flex-col pb-6">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-checkWhite">
        Contact Us: <a href="mailto:checkmate@better.sg">checkmate@better.sg</a>
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-checkWhite">
          <Link to="privacy-policy">Privacy Policy</Link>
        </p>
      </div>
    </div>
    
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white">
      <p className="flex flex-col md:flex-row gap-x-2 items-center font-poppins font-normal text-center text-[18px] leading-[27px] text-checkWhite">
        <span className="flex flex-row gap-x-2 items-center">A <a href="http://better.sg/"><img src={bettersg} /></a> initiative, </span>in collaboration with <a href="https://www.scamshield.org.sg/"><img src={scamshield} /></a>
      </p>

      <div className="flex flex-col md:flex-row md:mt-0 mt-6 gap-y-2">
        <div className="flex flex-row">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
        <span className="ml-4 text-checkWhite font-poppins font-normal">© 2023 CheckMate</span>
      </div>
    </div>
  </section>
);

export default Footer;
