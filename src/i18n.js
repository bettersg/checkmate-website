import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
          "nav.home": "Home",
          "nav.about": "About Us",
          "nav.message-database": "Message Database",
          "nav.privacy-policy": "Privacy Policy",
          "nav.contact": "Contact Us",
          "hero.title1": "We verify",
        },
      },
      cn: {
        translation: {
          "nav.home": "主页",
          "nav.about": "关于我们",
          "nav.message-database": "消息库",
          "nav.privacy-policy": "隐私政策",
          "nav.contact": "联系我们",
          "hero.title1": "我们验证",
        },
      },
    },
  });

export default i18n;
