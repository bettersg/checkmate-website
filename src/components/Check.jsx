import styles from "../style";
import { team01, team02, team03, team04, team05, arrowUp, arrowRight } from "../assets"

const Check = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 max-w-[1280px]`}>
    <div className="flex flex-col justify-center text-center">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[64px] text-[48px] text-checkShadeDark text-center py-8">
        Check dubious <span className="text-checkPrimary600">messages</span>
      </h1>

      {/** First block of pics: BW, Amanda */}    
      <div className="flex flex-row justify-between items-stretch pt-2">
        <div className="flex flex-col pb-24 pl-6 text-right gap-y-2">
          <img className="pr-12" src={team01} alt="Bing Wen Tan" />
          <div>
            <p className="font-semibold">Bing Wen Tan</p>
            <p>Founder</p>
          </div>
        </div>
        <div className="flex flex-col pt-24 pr-6 text-left gap-y-2">
          <div>
            <p className="font-semibold">Amanda Goh</p>
            <p>New Gen AI</p>
          </div>
          <img className="pl-12" src={team02} alt="Amanda Goh" />
        </div>
      </div>
      
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
          <img src={arrowUp} className="fill-checkPrimary600"/>
        </a>
        <a
          href="https://bit.ly/add-checkmate"
          className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans rounded-[50px] px-5 py-4 text-center max-w-sm"
        >
          <span className="text-checkWhite">Join as a fact checker</span>
          <img src={arrowRight} />
        </a>
      </div>

      {/** Second block of pics: Vincent Carlos Wendy Tasha */}
      <div className="grid grid-cols-3 grid-rows-3 w-full">
        <div className="w-full row-start-1 col-start-3 row-span-1">
          <img className="" src={team03} />
        </div>
        <div className="w-full row-start-2 col-start-2 row-span-1">
          <img src={team04} />
        </div>
        <div className="w-full row-start-3 col-start-1 row-span-1">
          <img src={team05} />
        </div>
      </div>

    </div>


  </section>
);

export default Check;
