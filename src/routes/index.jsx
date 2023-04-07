import { Setup, Work, CTA, Hero } from "../components";

export default function Index() {
    return (
  <div className="bg-primary w-full">
        <div className="bg-primary flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
      </div>
    </div>
    
    <div className="bg-checkPurple sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
          <Setup />
      </div>
    </div>

    <div className="bg-checkWhite sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
          <Work />
      </div>
    </div>

    <div className="bg-checkWhite sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
          <CTA />
      </div>
    </div>
  </div>
  );
}
