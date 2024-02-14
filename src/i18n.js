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
          // Checked
          "checked.title": "What we’ve checked",
          "checked.subtext":
            "See some of the content that we've helped to check!",
          "checked.card_1_title": "Suspicious messages",
          "checked.card_1_text":
            "Misinformation, Scams, Surveys, Job offerings, Packages, Investments and others",
          "checked.card_1_cta": "See more",
          "checked.card_2_title": "Images",
          "checked.card_2_text":
            "QR codes, Flyers, Advertisements, Spam, Screenshots, Deals too good to be true",
          "checked.cta": "See all",
          // Cards3D
          "card.0_text":
            "Got a text message from “Alice the recruiter” at JobsDB?",
          "card.0_button": "Forward it in",
          "card.1_text": "Find out if the deal is Too Good To Be True.",
          "card.1_button": "Forward it to CheckMate",
          "card.2_text":
            "Came across a strange website claiming to be Singtel?",
          "card.2_button": "Forward us the URL",
          "card.3_text":
            "Received an image in group chats claiming vaccines don't work?",
          "card.3_button": "Forward it in",
          "card.4_text":
            "Got an email saying your bank account has “security issues”?",
          "card.4_button": "Forward us a screenshot",
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
          // Checked
          "checked.title": "我们检查过什么",
          "checked.subtext": "查看我们帮助检查的一些内容!",
          "checked.card_1_title": "可疑消息",
          "checked.card_1_text": "错误信息、诈骗、调查、工作机会、套餐、投资等",
          "checked.card_1_cta": "查看更多",
          "checked.card_2_title": "图片",
          "checked.card_2_text":
            "二维码、传单、广告、垃圾邮件、屏幕截图、好得令人难以置信的优惠",
          "checked.cta": "查看全部",
          // Cards3D
          "card.0_text": "收到了来自 JobsDB 的“招聘人员 Alice”的短信？",
          "card.0_button": "转发到",
          "card.1_text": "看看这笔交易是否好得令人难以置信.",
          "card.1_button": "将其转发至 CheckMate",
          "card.2_text": "遇到一个自称是 Singtel 的奇怪网站？",
          "card.2_button": "将网址转发给我们",
          "card.3_text": "在群聊中收到一张声称疫苗不起作用的图片？",
          "card.3_button": "转发到",
          "card.4_text": "收到一封电子邮件说您的银行帐户存在“安全问题”?",
          "card.4_button": "给我们转发截图",
        },
      },
    },
  });

export default i18n;
