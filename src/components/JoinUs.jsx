import styles from "../style";
import { arrowUp, arrowRight } from "../assets"

const JoinUs = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 max-w-[1280px]`}>
      <div className="flex flex-col justify-center text-center">

        {/** Text block */}
        <h2 className="text-checkPrimary600 mt-[-32px] ss:text-[64px] text-[48px] text-left font-bold leading-none tracking-tight">
          CheckMate is powered by a crew of multidisciplinary volunteers, who separate facts from fiction with the help of artificial intelligence.
        </h2>

        {/** CTA */}
        <div className="flex flex-row gap-x-6 pt-6">
          <a
            href="/about"
            className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkWhite font-workSans rounded-[50px] px-5 py-4 text-center max-w-sm"
          >
            <span className="text-checkPrimary600">Learn more</span>
            <img src={arrowUp} className="fill-checkPrimary600" />
          </a>
          <a
            href="https://bit.ly/add-checkmate"
            className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans rounded-[50px] px-5 py-4 text-center max-w-sm"
          >
            <span className="text-checkWhite">Join as a fact checker</span>
            <img src={arrowRight} />
          </a>
        </div>
      </div>
    </section>
  )
};

export default JoinUs;
