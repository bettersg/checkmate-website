import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { approachTranslations } from "./components/Approach";
import { checkTranslations } from "./components/Check";
import { navbarTranslations } from "./components/Navbar";
import { heroTranslations } from "./components/Hero";
import { checkedTranslations } from "./components/Checked";
import { cards3DTranslations } from "./components/Cards3D";
import { faqTranslations } from "./components/Faq";
import { footerTranslations } from "./components/Footer";

const languageAgnostic = {
  "entity.scamshield": "ScamShield",
  "entity.checkmate": "CheckMate",
  "entity.bettersg": "better.sg",
};

const sharedTranslations = {
  en: {
    home: "Home",
    about: "About Us",
    "message-database": "Message Database",
    contact: "Contact Us",
    "cta.button": "Try it now",
    "privacy-policy": "Privacy Policy",
  },
  cn: {
    home: "主页",
    about: "关于我们",
    "message-database": "消息库",

    contact: "联系我们",
    "cta.button": "现在就试试",
    "privacy-policy": "隐私政策",
  },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          ...languageAgnostic,
          ...sharedTranslations.en,
          ...navbarTranslations.en,
          ...heroTranslations.en,
          ...approachTranslations.en,
          ...checkTranslations.en,
          ...checkedTranslations.en,
          ...cards3DTranslations.en,
          ...faqTranslations.en,
          ...footerTranslations.en,
        },
      },

      cn: {
        translation: {
          ...languageAgnostic,
          ...sharedTranslations.cn,
          ...navbarTranslations.cn,
          ...heroTranslations.cn,
          ...approachTranslations.cn,
          ...checkTranslations.cn,
          ...checkedTranslations.cn,
          ...cards3DTranslations.cn,
          ...faqTranslations.cn,
          ...footerTranslations.cn,
        },
      },
    },
  });

export default i18n;
