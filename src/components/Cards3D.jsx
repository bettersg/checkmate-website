import move from "lodash-move";
import { useState } from "react";
import { whatsappOrange } from "../assets";
import { motion } from "framer-motion";

const CARD_COLORS = ["#ff7557", "#ff5833", " #ff431a", "#ff431a", "#ff2e00"];
const CARD_OFFSET = 20;
const SCALE_FACTOR = 0.08;

const cards_content = [
    {
        index: 0,
        text: "Got a text message from “Alice the recruiter” at JobsDB?",
        buttonText: "Forward it in",
        link: "https://bit.ly/add-checkmate"
    },
    {
        index: 1,
        text: "Find out if the deal is Too Good To Be True.",
        buttonText: "Forward it to CheckMate",
        link: "https://bit.ly/add-checkmate"
    },
    {
        index: 2,
        text: "Came across a strange website claiming to be Singtel?",
        buttonText: "Forward us the URL",
        link: "https://bit.ly/add-checkmate"
    },
    {
        index: 3,
        text: "Received an image in group chats  claiming vaccines don't work?",
        buttonText: "Forward it in",
        link: "https://bit.ly/add-checkmate"
    },
    {
        index: 4,
        text: "Got an email saying your bank account has “security issues”?",
        buttonText: "Forward us a screenshot",
        link: "https://bit.ly/add-checkmate"
    }
]

const Cards3D = () => {
    const [cards, setCards] = useState(CARD_COLORS);

    const wrapperStyle = {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      };

    const moveToEnd = async (from) => {
        if (from == cards.length-1) {
            from = 0
        }
        setCards(move(cards, from, cards.length - 1));
    };

    return (
    
    <div className="flex flex-col justify-center font-poppins">
      <div className="relative flex justify-center items-center h-[50vh]">
        <ul className="relative w-full h-[220px] mx-16">
            {cards.map((color, index) => {
            const canDrag = index === 0;
                // need to trigger animation on start and execute moveTToEnd on repeat
            return (
                <motion.li
                key={color}
                className="absolute w-full h-full rounded-carousel shadow-2xl list-none px-24 py-16 text-checkWhite font-poppins"
                style={{
                    transformOrigin: "top center",
                    backgroundColor: color,
                }}
                animate={{
                    top: index * -CARD_OFFSET,
                    scale: 1 - index * SCALE_FACTOR,
                    zIndex: CARD_COLORS.length - index
                }}
                
                transition={{ duration: 1, delay: 3 }}
                onAnimationComplete={() => {moveToEnd(index); console.log("Transition end") }}
                >
                    <div className="flex flex-col sm:flex-row items-center gap-x-4">
                        <div className="ss:text-[32px] text-[24px] font-semibold">{cards_content[index].text}</div>
                        <a href={cards_content[index].link} className="cursor-pointer flex flex-row bg-checkWhite text-checkPrimary600 rounded-[50px] w-[28rem] max-w-sm px-8 py-4 justify-center items-center gap-x-4">
                            <img src={whatsappOrange} />
                            {cards_content[index].buttonText}
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
