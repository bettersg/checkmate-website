import styles from "../style";
import hero from "../assets/hero.png";
import ButtonCTAWhatsapp from "./ButtonCTAWhatsapp";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-wrap ${styles.paddingY} justify-center py-6`}
    >
      <img
        src={hero}
        alt="checkMate"
        className="gradient-mask-b-50 z-[5] sm:px-24 px-4"
      />

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
          <div className="flex flex-col items-start sm:text-6xl text-5xl font-poppins font-semibold text-checkPurple">
            <p className="leading-normal">You flag,</p>
            <p>we check</p>
          </div>

          <p className={`${styles.paragraph} text-checkPurple max-w-xs mt-5`}>
            Not sure if a message is legit? Let us help you check it!
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
