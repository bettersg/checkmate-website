import styles from "../style";
import { work01, work02, work03, work04, arrowWork } from "../assets"

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    <div className="flex flex-col justify-center text-center">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[64px] text-[48px] text-checkPurple text-center pt-10">
        I’ve set it up! But how it works?
      </h1>
      <h2 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[36px] text-checkPurple text-center pt-10">
        Receive a potential scam message or fake news?
      </h2>
      <h2 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[36px] text-checkPurple text-center">
        Let CheckMate help you!
      </h2>
      <p className="font-poppins font-normal text-xl text-checkPurple pt-10 w-1/2 mx-auto">
        Simply forward the potential scam message or fake news to CheckMate and we will verify it for you!
      </p>
    </div>
    
    {/** section with the screenshots */}
    <div className="flex flex-col md:flex-row">
      {/** First column */}
      <div className="flex flex-col w-full md:w-1/2 justify-start items-center gap-y-4">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <img src={work01} />
          <span className="font-poppins font-normal text-xl text-center text-checkPurple">
            An unknown number <br/>messaged you?
          </span>
        </div>
        <div className="h-[150px]">
          <img src={arrowWork}/>
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
            Or your loved ones forwarded you a <br/>message that seems dubious?
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
      Forward it to CheckMate and let the CheckMate fact-check the messages for you! 
    </div>
  </section>
);

export default Stats;
