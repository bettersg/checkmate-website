import styles from "../style";
import { socialMedia } from "../constants";
import { bettersg, scamshield } from "../assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section
      id="footer"
      className={`w-full pt-[40px] md:pt-14 pb-14 px-16 flex justify-center items-center flex-col bg-checkBGFooter text-checkWhite font-poppins`}
    >
      <div className="xl:max-w-[1280px] w-full flex flex-col md:flex-row gap-y-8 justify-center">
        <div className="w-full md:w-1/4">
          <div className="text-[20px]">{t("entity.checkmate")}</div>
          <div className="flex flex-col pl-4 pt-4 ss:pt-8 text-[16px] gap-y-3 ss:gap-y-6">
            <Link to="/">{t("home")}</Link>
            <Link to="/about">{t("about")}</Link>
            {/*<Link to="/message-database">Message Database</Link>*/}
            <Link to="/contact">{t("contact")}</Link>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <div className="text-[20px]">{t("footer.legal")}</div>
          <div className="pl-4 pt-4 ss:pt-8 text-[16px]">
            <Link to="/privacy-policy">{t("privacy-policy")}</Link>
          </div>
        </div>

        <div className="w-full md:w-1/4 hidden ss:block">
          <div className="">&nbsp;</div>
        </div>

        <div className="w-full md:w-1/4 flex flex-col gap-y-4 ss:gap-y-8">
          <div className="text-[20px]">{t("footer.find_us_on")}</div>
          <div className="flex flex-col gap-y-3 ss:gap-y-6 text-[16px]">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                className="flex flex-row"
              >
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
                />
                <span className="text-[16px]">{social.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap max-w-[1280px] w-full mt-16 font-normal">
        {t("entity.checkmate")}. A&nbsp;
        <a href="https://better.sg" target="_blank">
          {t("entity.bettersg")}
        </a>
        &nbsp;{t("footer.initiative")} © 2023 {t("entity.checkmate")}
      </div>
    </section>
  );
};

export const footerTranslations = {
  en: {
    "footer.legal": "Legal",
    "footer.find_us_on": "Find us on",
    "footer.initiative": "Initiative",
  },
  cn: {
    "footer.legal": "法律",
    "footer.find_us_on": "在 - 找到我们",
    "footer.initiative": "倡议",
  },
};

export default Footer;
