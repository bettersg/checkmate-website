import styles from "../style";
import hero from "../assets/hero.png"
import ButtonCTAWhatsapp from "./ButtonCTAWhatsapp";

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col items-start ${styles.paddingY}`}>
      
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 py-2 md:py-28 relative pl-24`}>
        <img 
          src={hero} 
          alt="checkMate" 
          className="gradient-mask-b-50 w-[80%] h-[80%] relative z-[5]"
        />
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6 md:my-0 my-10 py-2 md:py-28`}
      >
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[64px] text-[48px] text-checkPurple ss:leading-[100.8px] leading-[75px]">
              World’s Fastest<br className="sm:block hidden" />{" "}
              Fact-Checker
            </h1>
          </div>

          <p className={`${styles.paragraph} text-checkPurple max-w-[470px] mt-5`}>
            Easily check if the messages you received are scams
          </p>

          <div className=" mb-2 mt-5 sm:mt-8 cursor-pointer">
              <ButtonCTAWhatsapp />
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
