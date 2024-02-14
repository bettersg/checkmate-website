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
          // Common
          "cta.button": "Try it now",
          // Nav
          "nav.home": "Home",
          "nav.about": "About Us",
          "nav.message-database": "Message Database",
          "nav.privacy-policy": "Privacy Policy",
          "nav.contact": "Contact Us",
          // Hero
          "hero.title_1": "We verify",
          "hero.title_2": "Scams",
          "hero.title_3": "and",
          "hero.title_4": "Misinformation",
          "hero.paragraph":
            "Not sure if a message can be trusted? Simply forward it to CheckMate and we’ll check it for you!",
        },
      },
      cn: {
        translation: {
          // Common
          "cta.button": "现在就试试",
          // Nav
          "nav.home": "主页",
          "nav.about": "关于我们",
          "nav.message-database": "消息库",
          "nav.privacy-policy": "隐私政策",
          "nav.contact": "联系我们",
          // Hero
          "hero.title_1": "我们验证",
          "hero.title_2": "诈骗",
          "hero.title_3": "与",
          "hero.title_4": "误传",
          "hero.paragraph":
            "不确定消息是否可信？只需将其转发给 CheckMate，我们就会为您检查！",
        },
      },
    },
  });

export default i18n;
