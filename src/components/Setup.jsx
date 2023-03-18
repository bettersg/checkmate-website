import styles from "../style";
import { setup01, setup02, arrowSetup } from "../assets"

const Setup = () => (
  <section className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 pt-6`}>
    <h1 className="flex-1 font-poppins font-semibold ss:text-[64px] text-[48px] text-checkWhite text-center py-8">
      How to set up?
    </h1>
    <div className="flex flex-col md:flex-row gap-y-12 md:gap-y-0 justify-center items-center">
      {/** first image block on the left */}
      <div className="flex flex-col text-checkWhite justify-center items-center w-[430px]">
        <img src={setup01} />
        <span className="font-poppins text-xl text-center font-normal">You can set up CheckMate on your device by scanning the QR code above or send a message to +6580432188</span>
      </div>
      
      {/** Linking arrow */}
      <img src={arrowSetup} className="hidden md:flex"/>

      {/** second image block on the right */}
      <div className="flex flex-col text-checkWhite justify-center items-center w-[430px]">
        <img src={setup02} width="310px"/>
        <span className="font-poppins text-xl text-center font-normal">Send an auto-generated message to CheckMate, which will then trigger it to explain how it works!<br /><br />Yes, it’s THAT simple! </span>
      </div>
    </div>
  </section>
);

export default Setup;
