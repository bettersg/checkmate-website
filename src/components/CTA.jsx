import styles from "../style";
import { arrowRight } from "../assets";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-col md:flex-row gap-x-4 gap-y-4 sm:mb-20 mb-6 bg-checkWhite rounded-carousel px-8 md:px-20 py-12 md:py-20 font-poppins w-full`}>
    <p className="text-[24px] md:text-[30px] font-bold px-0 md:px-6 text-checkShadeDark">Is your business name being used in scams or messages containing misinformation?</p>
    <a
        href="https://ref.checkmate.sg/add?utm_source=website&utm_medium=cta"
        className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans font-medium rounded-[50px] px-8 py-4 text-center max-w-sm min-w-[16rem] sm:w-[20rem]"
      >
        <span className="text-checkWhite text-[20px]">Talk to us</span>
        <img src={arrowRight} />
      </a>

  </section>
);

export default Stats;
