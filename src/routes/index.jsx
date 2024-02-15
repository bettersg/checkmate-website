import { Approach, Hero, Check, Checked, Faq, Cards3D } from "../components";
import { useEffect } from "react";

export default function Index() {
  // scroll to the top on mount
  useEffect(() => {
    const scrollDelay = 100;

    const timeoutId = setTimeout(() => {
      // window.scrollTo(0, 0);
    }, scrollDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-checkBG w-full">
      <div className="bg-checkBG flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className="bg-checkBG sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Approach />
        </div>
      </div>

      <Check />

      <div className="bg-checkBG sm:px-16 px-6 flex justify-center items-center mt-6">
        <div className="xl:max-w-[1280px] w-full">
          <Checked />
        </div>
      </div>

      <div className="bg-checkBG sm:px-16 px-6 flex justify-center items-center mt-24">
        <div className="xl:max-w-[1280px] w-full">
          <Cards3D />
        </div>
      </div>

      <div className="bg-checkBG sm:px-16 px-6 flex justify-center items-center mt-24">
        <div className="xl:max-w-[1280px] w-full">
          <Faq />
        </div>
      </div>
    </div>
  );
}
