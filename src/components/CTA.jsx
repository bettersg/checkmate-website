import styles from "../style";
import { arrowRight } from "../assets";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-col gap-y-4 flex-wrap sm:mb-20 mb-6`}>
    <a
        href="https://bit.ly/add-checkmate"
        className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans rounded-[50px] px-5 py-4 text-center max-w-sm "
      >
        <span className="text-checkWhite">Try it now</span>
        <img src={arrowRight} />
      </a>

  </section>
);

export default Stats;
