import { useEffect, useState } from "react";
import { whatsappOrange } from "../assets";
import { motion } from "framer-motion";
import { cards_content } from "../constants";

const CARD_OFFSET = 30;
const SCALE_FACTOR = 0.08;

const Cards3D = () => {
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
                  {card.text}
                </div>
                <a
                  href={card.link}
                  className="cursor-pointer flex flex-row flex-nowrap bg-checkWhite text-checkPrimary600 rounded-[50px] min-w-[20rem] md:min-w-[26rem] max-w-sm ss:max-w-xs px-8 py-4 justify-center items-center gap-x-4 font-workSans font-medium text-[16px] ss:text-[20px]"
                >
                  <img src={whatsappOrange} className="w-8" alt="WhatsApp" />
                  {card.buttonText}
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards3D;
