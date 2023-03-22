import styles from "../style";
import { work01, work02, work03, work04, arrowWork } from "../assets"

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    <div className="flex flex-col justify-center text-center">
      <h2 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[36px] text-checkPurple text-center pt-10">
        Received a dubious message that you're not sure about?
      </h2>
      <h2 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[36px] text-checkPurple text-center">
        Let CheckMate help you!
      </h2>
      <p className="font-poppins font-normal text-xl text-checkPurple pt-10 w-1/2 mx-auto">
        Simply forward the message to the CheckMate bot and we will verify it for you!
      </p>
    </div>

    {/** section with the screenshots */}
    <div className="flex flex-col md:flex-row">
      {/** First column */}
      <div className="flex flex-col w-full md:w-1/2 justify-start items-center gap-y-4">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <img src={work01} />
          <span className="font-poppins font-normal text-xl text-center text-checkPurple">
            Received a dubious message <br /> from an unknown number?
          </span>
        </div>
        <div className="h-[150px]">
          <img src={arrowWork} />
        </div>
        <div className="">
          <img src={work03} />
        </div>
      </div>

      {/** Second column */}
      <div className="flex flex-col w-full md:w-1/2 justify-start items-center gap-y-4">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <img src={work02} />
          <span className="font-poppins font-normal text-xl text-center text-checkPurple">
            Or did someone you know forward you<br />a message that seems dubious?
          </span>
        </div>
        <div className="h-[150px]">
          <img src={arrowWork} />
        </div>
        <div className="">
          <img src={work04} />
        </div>
      </div>
    </div>

    <div className="mt-12 font-poppins font-normal text-xl text-center text-checkPurple">
      Forward it to the CheckMate bot, and let our CheckMates verify these messages for you!
    </div>
  </section>
);

export default Stats;
