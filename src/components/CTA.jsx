import styles from "../style";
import { arrowRight } from "../assets";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row gap-x-4 sm:mb-20 mb-6 bg-checkWhite rounded-carousel px-20 py-20`}>
    <p className="text-4xl font-semibold px-6">Is your business name being used in scams or messages containing misinformation?</p>
    <a
        href="https://bit.ly/add-checkmate"
        className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans rounded-[50px] px-8 py-4 text-center max-w-sm w-80 "
      >
        <span className="text-checkWhite">Talk to us</span>
        <img src={arrowRight} />
      </a>

  </section>
);

export default Stats;
