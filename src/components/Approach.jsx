import styles from "../style";
import { genericText, iconQuestion, iconMessage, iconWarning } from "../assets"

const Approach = () => (
  
  <section className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 pt-2`}>
    <h1 className="flex-1 font-poppins font-bold text-[36px] md:text-[48px] text-checkShadeDark text-left md:text-center pb-16 w-full">
      Our Approach
    </h1>
    <div className="font-workSans flex flex-col md:flex-row items-stretch gap-y-12 md:gap-y-0 gap-x-12 justify-center max-w-[1280px]">
      {/** first card */}
      <div className="rounded-carousel min-h-[120px] w-full md:w-1/3 shadow-2xl font-workSans">
        {/** Icon */}
        <div className="relative top-6 left-12 mt-[-58px]">
          <img src={iconWarning} alt="Warning"/>
        </div>
        
        {/** Main text bubble */}
        <div className="h-[70%] bg-checkCarouselRed rounded-t-carousel px-12 pt-16 pb-12">
          <div className="pl-4 text-checkBlack">Unknown</div>
          <div className="px-8 py-4 bg-white mt-1 rounded-[24px] shadow-md text-checkBlack">
            LTA: Notice As no valid E-tag detected in your vehicle, your last trip on was unpaid. Please pay now to avoid penalty notice: <span className="text-checkLink">https://itsascam.com</span>
          </div>
        </div>
      
        {/** Sub text */}
        <div className="h-[30%] bg-checkWhite text-checkBlack text-[20px] font-medium text-center px-8 py-4 rounded-b-carousel flex items-center">
          Send in a dubious message, or a screenshot of the message and sender to us.
        </div>
      </div>

      {/** Second card */}
      <div className="rounded-carousel min-h-[120px] w-full md:w-1/3 shadow-2xl font-workSans">
        {/** Icon */}
        <div className="relative top-6 left-12 mt-[-58px]">
          <img src={iconQuestion} alt="Question"/>
        </div>
        
        {/** Main text bubble */}
        <div className="h-[70%] bg-checkCarouselYellow rounded-t-carousel px-12 pt-16 pb-12">
          <div className="pl-4 text-checkBlack">Unknown</div>
          <div className="px-8 py-4 bg-white mt-1 rounded-[24px] shadow-md mb-16 text-checkBlack">
            <img src={genericText} />
          </div>
        </div>
      
        {/** Sub text */}
        <div className="h-[30%] bg-checkWhite text-[20px] font-medium text-center px-8 py-4 rounded-b-carousel text-checkBlack flex items-center">
          Our AI tries to classify the message. If it’s unable to, human checkers will review it!
        </div>
      </div>

      {/** Third card */}
      <div className="rounded-carousel min-h-[120px] w-full md:w-1/3 shadow-2xl">
        {/** Icon */}
        <div className="relative top-6 left-12 mt-[-58px]">
          <img src={iconMessage} alt="Message"/>
        </div>
        
        {/** Main text bubble */}
        <div className="h-[70%] bg-checkCarouselGreen rounded-t-carousel px-12 pt-16 pb-12 text-checkBlack">
          <div className="pl-4">From CheckMateSG</div>
          <div className="px-8 py-4 bg-white mt-1 rounded-[24px] shadow-md">
            This is likely a scam!
          </div>
        </div>
      
        {/** Sub text */}
        <div className="h-[30%] bg-checkWhite text-checkBlack text-[20px] font-medium text-center px-8 py-4 rounded-b-carousel flex items-center">
          Once checked, we inform you of the results!
        </div>
      </div>

    </div>
  </section>
);

export default Approach;
