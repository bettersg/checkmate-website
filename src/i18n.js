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
          // Approach
          "approach.title": "Our Approach",
          "approach.card_1_title": "Unknown",
          "approach.card_1_convo_text":
            "LTA: Notice As no valid E-tag detected in your vehicle, your last trip on was unpaid. Please pay now to avoid penalty notice:",
          "approach.card_1_convo_link": "https://itsascam.com",
          "approach.card_1_subtext":
            "Send in a dubious message, or a screenshot of the message and sender to us.",
          "approach.card_2_title": "Unknown",
          "approach.card_2_subtext":
            "Our AI tries to classify the message. If it’s unable to, human checkers will review it!",
          "approach.card_3_title": "From CheckMateSG",
          "approach.card_3_convo_text": "This is likely a scam!",
          "approach.card_3_subtext":
            "Once checked, we inform you of the results!",
          // Check
          "check.title": "Check dubious",
          "check.title_subtext": ["messages", "email", "flyers", "QR codes"],
          "check.text_block":
            "CheckMate is powered by a crew of multidisciplinary volunteers who separate fact from fiction using the power of voting and artificial intelligence.",
          "check.hashtag": "#TechForGood",
          "check.cta": "Learn more",
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
          // Approach
          "approach.title": "我们的方法",
          "approach.card_1_title": "不知",
          "approach.card_1_convo_text":
            "LTA：通知 由于在您的车辆中未检测到有效的电子标签，因此您的上次行程未支付费用。请立即付款以避免罚款通知：",
          "approach.card_1_convo_link": "https://itsascam.com",
          "approach.card_1_subtext":
            "向我们发送可疑消息或消息和发件人的屏幕截图.",
          "approach.card_2_title": "不知",
          "approach.card_2_subtext":
            "我们的人工智能尝试对消息进行分类。如果无法，人工检查员将对其进行审核!",
          "approach.card_3_title": "来自 CheckMateSG",
          "approach.card_3_convo_text": "这很可能是一个骗局!",
          "approach.card_3_subtext": "一旦检查完毕，我们将通知您结果！",
          // Check
          "check.title": "检查可疑的",
          "check.title_subtext": ["信息", "电子邮件", "传单", "二维码"],
          "check.text_block":
            "CheckMate 由一群多学科志愿者提供支持，他们利用投票和人工智能的力量将事实与虚构分开.",
          "check.hashtag": "#TechForGood",
          "check.cta": "了解更多",
        },
      },
    },
  });

export default i18n;
