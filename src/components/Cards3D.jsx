import { useEffect, useState } from "react";
import { whatsappOrange } from "../assets";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { cards_content } from "../constants";

const CARD_OFFSET = 30;
const SCALE_FACTOR = 0.08;

const Cards3D = () => {
  const { t } = useTranslation();

  const [cards, setCards] = useState(cards_content);

  useEffect(() => {
    setTimeout(() => {
      const newCards = [...cards];
      const firstCard = newCards.shift();
      newCards.push(firstCard);

      setCards(newCards);
    }, 3000);
  }, [cards]);

  const getPositionColor = (index) => {
    let color = "";
    switch (index) {
      case 0:
        color = "#ff5833";
        break;
      case 1:
        color = "#ff431a";
        break;
      case 2:
        color = "#ff431a";
        break;
      case 3:
        color = "#ff2e00";
        break;
      default:
        color = "#ff2e00";
        break;
    }
    return color;
  };

  return (
    <div className="flex flex-col justify-center font-poppins">
      <div className="relative flex justify-center items-center h-[50vh]">
        <ul className="relative w-full h-[320px] md:h-[220px] mx-4 sm:mx-16">
          {cards.map((card, index) => (
            <motion.li
              key={card.index}
              className="absolute w-full h-full rounded-carousel shadow-2xl list-none px-8 ss:px-12 md:px-24 py-16 text-checkWhite font-poppins"
              style={{
                transformOrigin: "bottom",
                backgroundColor:
                  index === 0 ? "#ff7557" : getPositionColor(index),
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
              layout
            >
              <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-4">
                <div className="ss:text-[28px] md:text-[32px] text-[24px] font-medium">
                  {t(`card.${card.index}_text`)}
                </div>
                <a
                  href={card.link}
                  className="cursor-pointer flex flex-row flex-nowrap bg-checkWhite text-checkPrimary600 rounded-[50px] min-w-[20rem] md:min-w-[26rem] max-w-sm ss:max-w-xs px-8 py-4 justify-center items-center gap-x-4 font-workSans font-medium text-[16px] ss:text-[20px]"
                >
                  <img src={whatsappOrange} className="w-8" alt="WhatsApp" />
                  {t(`card.${card.index}_button`)}
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const cards3DTranslations = {
  en: {
    "card.0_text": "Got a text message from “Alice the recruiter” at JobsDB?",
    "card.0_button": "Forward it in",
    "card.1_text": "Find out if the deal is Too Good To Be True.",
    "card.1_button": "Forward it to CheckMate",
    "card.2_text": "Came across a strange website claiming to be Singtel?",
    "card.2_button": "Forward us the URL",
    "card.3_text":
      "Received an image in group chats claiming vaccines don't work?",
    "card.3_button": "Forward it in",
    "card.4_text":
      "Got an email saying your bank account has “security issues”?",
    "card.4_button": "Forward us a screenshot",
  },
  cn: {
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
};

export default Cards3D;
