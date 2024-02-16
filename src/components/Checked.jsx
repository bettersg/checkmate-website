import { Link } from "react-router-dom";
import {
  checkedImg1,
  checkedImg2,
  arrowRightOrange,
  arrowRight,
} from "../assets";
import { useTranslation } from "react-i18next";

const Checked = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-checkWhite rounded-carousel flex flex-col px-8 md:px-24 py-12 md:py-24 mt-48 justify-center font-poppins">
      <h1 className="w-full font-bold ss:text-[64px] text-[48px] text-checkShadeDark text-center mx-auto">
        {t("checked.title")}
      </h1>
      <h2 className="w-full ss:text-[28px] text-[20px] text-center mx-auto text-checkBlack">
        {t("checked.subtext")}
      </h2>

      <div className="flex flex-col md:flex-row w-full gap-x-12 gap-y-8 pt-12">
        <div className="w-full md:w-1/2 bg-checkGray rounded-carousel flex flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-1/2 px-6 md:pl-12 pt-10 ss:pt-0 justify-center md:mt-0">
            <h2 className="ss:text-[28px] text-[20px] font-medium text-checkShadeDark font-poppins">
              {t("checked.card_1_title")}
            </h2>
            <h3 className="md:text-[20px] text-[16px] text-checkDarkGray font-workSans">
              {t("checked.card_1_text")}
            </h3>
            <Link to="/message-database">
              <div className="text-checkPrimary600 flex flex-row font-workSans">
                {t("checked.card_1_cta")}&nbsp;
                <img src={arrowRightOrange} />
              </div>
            </Link>
          </div>
          <img
            src={checkedImg1}
            className="w-full md:w-1/2 pt-12 overflow-hidden rounded-br-carousel"
          />
        </div>

        <div className="w-full md:w-1/2 bg-checkGray rounded-carousel flex flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-1/2 pl-6 pr-0 md:pl-12 pt-10 ss:pt-0 justify-center md:mt-0">
            <h2 className="ss:text-[28px] text-[20px] font-medium text-checkShadeDark font-poppins">
              {t("checked.card_2_title")}
            </h2>
            <h3 className="md:text-[20px] text-[16px] text-checkDarkGray font-workSans">
              {t("checked.card_2_text")}
              <br />
              &nbsp;
            </h3>
            {/*<Link to="/message-database">
                    <div className="text-checkPrimary600 flex flex-row font-workSans">See more&nbsp;<img src={arrowRightOrange} /></div>
                </Link>*/}
          </div>
          <img
            src={checkedImg2}
            className="w-full md:w-1/2 pt-12 overflow-hidden rounded-br-carousel"
          />
        </div>
      </div>

      <Link
        to="/message-database"
        className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans rounded-[50px] px-2 py-5 text-center w-72 max-w-xs mt-24 mx-auto"
      >
        <span className="text-[16px] md:text-[20px] font-workSans font-medium text-checkWhite">
          {t("checked.cta")}
        </span>
        <img src={arrowRight} />
      </Link>
    </div>
  );
};

export const checkedTranslations = {
  en: {
    "checked.title": "What we’ve checked",
    "checked.subtext": "See some of the content that we've helped to check!",
    "checked.card_1_title": "Suspicious messages",
    "checked.card_1_text":
      "Misinformation, Scams, Surveys, Job offerings, Packages, Investments and others",
    "checked.card_1_cta": "See more",
    "checked.card_2_title": "Images",
    "checked.card_2_text":
      "QR codes, Flyers, Advertisements, Spam, Screenshots, Deals too good to be true",
    "checked.cta": "See all",
  },
  cn: {
    "checked.title": "我们检查过什么",
    "checked.subtext": "查看我们帮助检查的一些内容!",
    "checked.card_1_title": "可疑消息",
    "checked.card_1_text": "错误信息、诈骗、调查、工作机会、套餐、投资等",
    "checked.card_1_cta": "查看更多",
    "checked.card_2_title": "图片",
    "checked.card_2_text":
      "二维码、传单、广告、垃圾邮件、屏幕截图、好得令人难以置信的优惠",
    "checked.cta": "查看全部",
  },
};

export default Checked;
