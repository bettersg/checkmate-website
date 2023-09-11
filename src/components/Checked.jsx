import { Link } from "react-router-dom"
import { checkedImg1, checkedImg2, arrowRightOrange, arrowRight } from "../assets";

const Checked = () => {
  return (
    <div className="bg-checkWhite rounded-carousel flex flex-col px-8 md:px-24 py-12 md:py-24 justify-center font-poppins">
      <h1 className="w-full font-bold ss:text-[64px] text-[48px] text-checkShadeDark text-center mx-auto">What we’ve checked</h1>
      <h2 className="w-full ss:text-[28px] text-[20px] text-center mx-auto">See some of the content that we've helped to check!</h2>

      <div className="flex flex-col md:flex-row w-full gap-x-12 gap-y-8 pt-12">
        
        <div className="w-full md:w-1/2 bg-checkGray rounded-carousel flex flex-row">
            <div className="flex flex-col w-1/2 pl-12 my-auto">
                <h2 className="ss:text-[28px] text-[20px] font-medium text-checkShadeDark font-poppins">Suspicious messages</h2>
                <h3 className="md:text-[20px] text-[14px] text-checkDarkGray font-workSans">Misinformation, Scams, Surveys, Job offerings, Packages, Investments and others</h3>
                <Link>
                    <div className="text-checkPrimary600 flex flex-row font-workSans">See more&nbsp;<img src={arrowRightOrange} /></div>
                    
                </Link>
            </div>
            <img src={checkedImg1} className="w-1/2 pt-12"/>
        </div>

        
        <div className="w-full md:w-1/2 bg-checkGray rounded-carousel flex flex-row">
            <div className="flex flex-col w-1/2 pl-12 my-auto">
                <h2 className="ss:text-[28px] text-[20px] font-medium text-checkShadeDark font-poppins">Images</h2>
                <h3 className="md:text-[20px] text-[16px] text-checkDarkGray font-workSans">QR codes, Flyers, Advertisements, Spam, Screenshots, Deals too good to be true<br/>&nbsp;</h3>
                <Link>
                    <div className="text-checkPrimary600 flex flex-row font-workSans">See more&nbsp;<img src={arrowRightOrange} /></div>
                    
                </Link>
            </div>
            <img src={checkedImg2} className="w-1/2 pt-12"/>
        </div>
        

      </div>

      <a
        href="https://bit.ly/add-checkmate"
        className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans rounded-[50px] px-2 py-5 text-center w-72 max-w-xs mt-24 mx-auto"
      >
        <span className="ss:text-[24px] text-[20px] font-workSans font-medium text-checkWhite">See all</span>
        <img src={arrowRight} />
        
      </a>
    </div>
  )
};

export default Checked;
