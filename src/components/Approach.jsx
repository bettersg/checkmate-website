import styles from "../style";
import { genericText, iconQuestion, iconMessage, iconWarning } from "../assets";
import { useTranslation } from "react-i18next";

const Approach = () => {
  const { t } = useTranslation();

  return (
    <section
      className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 pt-2`}
    >
      <h1 className="flex-1 font-poppins font-bold text-[36px] md:text-[48px] text-checkShadeDark text-center pb-16 w-full">
        {t("approach.title")}
      </h1>
      <div className="font-workSans flex flex-col md:flex-row items-stretch gap-y-12 md:gap-y-0 gap-x-12 justify-center max-w-[1280px]">
        {/** first card */}
        <div className="rounded-carousel min-h-[120px] w-full md:w-1/3 shadow-2xl font-workSans">
          {/** Icon */}
          <div className="relative top-6 left-12 mt-[-58px]">
            <img src={iconWarning} alt="Warning" />
          </div>

          {/** Main text bubble */}
          <div className="h-[70%] bg-checkCarouselRed rounded-t-carousel px-12 pt-16 pb-12">
            <div className="pl-4 text-checkBlack">
              {t("approach.card_1_title")}
            </div>
            <div className="px-8 py-4 bg-white mt-1 rounded-[24px] shadow-md text-checkBlack">
              {t("approach.card_1_convo_text")}{" "}
              <span className="text-checkLink">
                {t("approach.card_1_convo_link")}
              </span>
            </div>
          </div>

          {/** Sub text */}
          <div className="h-[30%] bg-checkWhite text-checkBlack text-[20px] font-medium text-center px-8 py-4 rounded-b-carousel flex items-center">
            {t("approach.card_1_subtext")}
          </div>
        </div>

        {/** Second card */}
        <div className="rounded-carousel min-h-[120px] w-full md:w-1/3 shadow-2xl font-workSans">
          {/** Icon */}
          <div className="relative top-6 left-12 mt-[-58px]">
            <img src={iconQuestion} alt="Question" />
          </div>

          {/** Main text bubble */}
          <div className="h-[70%] bg-checkCarouselYellow rounded-t-carousel px-12 pt-16 pb-12">
            <div className="pl-4 text-checkBlack">
              {t("approach.card_2_title")}
            </div>
            <div className="px-8 py-4 bg-white mt-1 rounded-[24px] shadow-md mb-16 text-checkBlack">
              <img src={genericText} />
            </div>
          </div>

          {/** Sub text */}
          <div className="h-[30%] bg-checkWhite text-[20px] font-medium text-center px-8 py-4 rounded-b-carousel text-checkBlack flex items-center">
            {t("approach.card_2_subtext")}
          </div>
        </div>

        {/** Third card */}
        <div className="rounded-carousel min-h-[120px] w-full md:w-1/3 shadow-2xl">
          {/** Icon */}
          <div className="relative top-6 left-12 mt-[-58px]">
            <img src={iconMessage} alt="Message" />
          </div>

          {/** Main text bubble */}
          <div className="h-[70%] bg-checkCarouselGreen rounded-t-carousel px-12 pt-16 pb-12 text-checkBlack">
            <div className="pl-4">{t("approach.card_3_title")}</div>
            <div className="px-8 py-4 bg-white mt-1 rounded-[24px] shadow-md">
              {t("approach.card_3_convo_text")}{" "}
            </div>
          </div>

          {/** Sub text */}
          <div className="h-[30%] bg-checkWhite text-checkBlack text-[20px] font-medium text-center px-8 py-4 rounded-b-carousel flex items-center">
            {t("approach.card_3_subtext")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
