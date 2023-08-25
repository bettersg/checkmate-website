import { Approach, Hero, Check, Checked, Faq, CTA } from "../components";

export default function Index() {
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
          <Faq />
        </div>
      </div>

    <div className="bg-checkBG sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
          <CTA />
      </div>
    </div>

  </div>
  );
}
