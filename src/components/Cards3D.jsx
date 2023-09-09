import move from "lodash-move";
import { useState } from "react";
import { whatsappOrange } from "../assets";
import { motion } from "framer-motion";
import { cards_content } from "../constants"

const CARD_COLORS = ["#ff7557", "#ff5833", " #ff431a", "#ff431a", "#ff2e00"];
const CARD_OFFSET = 20;
const SCALE_FACTOR = 0.08;


const Cards3D = () => {
    const [cards, setCards] = useState(CARD_COLORS);
    const [cardsContent, setCardsContent] = useState(cards_content)

    const moveToEnd = async (from) => {

        if (from == cards.length-1) {
            from = 0
        }

        setCardsContent(move(cardsContent, from, cardsContent.length - 1));
        setCards(move(cards, from, cards.length - 1));

    };

    return (
    
    <div className="flex flex-col justify-center font-poppins">
      <div className="relative flex justify-center items-center h-[50vh]">
        <ul className="relative w-full h-[320px] md:h-[220px] mx-4 sm:mx-16">
            {cards.map((color, index) => {
            const canDrag = index === 0;
                // need to trigger animation on start and execute moveTToEnd on repeat
            return (
                <motion.li
                    key={color}
                    className="absolute w-full h-full rounded-carousel shadow-2xl list-none px-8 ss:px-12 md:px-24 py-16 text-checkWhite font-poppins"
                    style={{
                        transformOrigin: "top center",
                        backgroundColor: color,
                    }}
                    animate={{
                        top: index * -CARD_OFFSET,
                        scale: 1 - index * SCALE_FACTOR,
                        zIndex: cardsContent.length - index
                    }}
                    transition={{ duration: 1, delay: 3 }}
                    onAnimationComplete={() => {moveToEnd(index); console.log("Transition end", cardsContent[0].text) }}
                >
                    <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-4">
                        <div className="ss:text-[28px] md:text-[32px] text-[24px] font-semibold">{cardsContent[index].text}</div>
                        <a href={cardsContent[index].link} 
                            className="cursor-pointer flex flex-row bg-checkWhite text-checkPrimary600 rounded-[50px] w-[20rem] ss:w-[28rem] max-w-sm ss:max-w-xs px-8 py-4 justify-center items-center gap-x-4">
                            <img src={whatsappOrange} />
                            {cardsContent[index].buttonText}
                        </a>
                    </div>
                </motion.li>
            );
            })}
        </ul>
        </div>
    </div>
  )
};

export default Cards3D;
