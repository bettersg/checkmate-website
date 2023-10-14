import styles from "../style";
import hero from "../assets/hero.png";
import { heroPicture} from "../assets"
import ButtonCTAWhatsapp from "./ButtonCTAWhatsapp";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row   justify-center py-2`}
    >

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: "0.25" }}
        className={`self-center w-full sm:w-auto overflow-x-hidden sm:px-24 px-8`}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="items-center"
        >
          <div className="flex flex-col items-start ss:text-[64px] text-[40px] font-poppins font-bold text-checkShadeDark">
            <p className="leading-tight">We verify</p>
            <p><span className="text-checkPrimary600 leading-tight">Scams</span> and</p>
            <p className="text-checkSecondaryYellow500 leading-tight">Misinformation</p>
          </div>

          <p className={`${styles.paragraph} max-w-md mt-5 text-checkBlack font-workSans text-[16px] ss:text-[18px]`}>
            Not sure if a message can be trusted? Simply forward your message to CheckMate and we’ll check it for you!
          </p>

          <div className=" mb-2 mt-5 sm:mt-8 cursor-pointer max-w-[12rem]">
            <ButtonCTAWhatsapp link="https://ref.checkmate.sg/add?utm_source=website&utm_medium=hero"/>
          </div>  
        </motion.div>
      </motion.div>

      <img src={heroPicture} alt="checkmate" />
    </section>
  );
};

export default Hero;
