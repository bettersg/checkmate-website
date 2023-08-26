import styles from "../style";
import { arrowRight } from "../assets";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row gap-x-4 sm:mb-20 mb-6 bg-checkWhite rounded-carousel px-20 py-20 font-poppins`}>
    <p className="ss:text-[44px] text-[30px] font-bold px-6 text-checkShadeDark">Is your business name being used in scams or messages containing misinformation?</p>
    <a
        href="https://ref.checkmate.sg/add?utm_source=website&utm_medium=cta"
        className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans rounded-[50px] px-8 py-4 text-center max-w-sm w-96"
      >
        <span className="text-checkWhite ss:text-[22px] text-[16px]">Talk to us</span>
        <img src={arrowRight} />
      </a>

  </section>
);

export default Stats;
