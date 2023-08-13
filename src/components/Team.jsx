import styles from "../style";
import { team01, team02, team03, team04, team05, team06 } from "../assets"
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const members = [
  { name: "Bing Wen Tan", title: "Founder", image: team01 },
  { name: "Amanda Goh", title: "New Gen AI", image: team02 },
  { name: "Vincent Teyssier", title: "CTO", image: team03 },
  { name: "Carlos Leyva-Salas", title: "Product Manager", image: team04 },
  { name: "Wendy Po", title: "Ux Designer Lead", image: team05 },
  { name: "Tasha Tan", title: "Ux Designer", image: team06 },
  { name: "Bing Wen Tan", title: "Founder", image: team01 },
  { name: "Amanda Goh", title: "New Gen AI", image: team02 },
  { name: "Vincent Teyssier", title: "CTO", image: team03 },
  { name: "Carlos Leyva-Salas", title: "Product Manager", image: team04 },
  { name: "Wendy Po", title: "Ux Designer Lead", image: team05 },
  { name: "Tasha Tan", title: "Ux Designer", image: team06 },
]

// configurations
const containerHeight = 200; //in vh - the bigger the number, the slower the scrolling
const offsetPosition = 20; //in vh
const imageSize = 288
const lpadding = 6;

const yLower = 50 / containerHeight;
const yUpper = 1 - yLower;
const paddingInPx = lpadding * 4;
const fullWidth = imageSize * members.length + paddingInPx * (members.length + 1);

// setting height/width through tailwind [] arbitrary values seems to be inconsistent

const Member = ({ name, title, image }) => (
  <div className={`flex flex-col pb-24 pl-${lpadding} gap-y-2 text-left`}>
    <img className={`h-auto object-cover`} style={{width:`${imageSize}px`}} src={image} alt={name} />
    <div>
      <p className="font-semibold">{name}</p>
      <p>{title}</p>
    </div>
  </div>
)

const Team = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const xSpringValue = useSpring(scrollYProgress, { bounce: 10, mass: 1, stiffness: 1000, damping: 50 });

  const y = useTransform(scrollYProgress, [0, yLower, yUpper, 1], ["0vh", `${offsetPosition}vh`, `${containerHeight - 100 + offsetPosition}vh`, `${Math.min(100, containerHeight - 100)}vh`])
  const x = useTransform(xSpringValue, [yLower+0.05, yUpper-0.05], ["0px", `${-fullWidth + window.innerWidth - paddingInPx}px`])

  return (
    <motion.div className="w-100 overflow-hidden" style={{height: `${containerHeight}vh`}} ref={containerRef}>
      <motion.div className="h-96 flex w-max" style={{ y, x }}>
        {members.map((member, index) => (
          <Member key={index} {...member} />
        ))}
      </motion.div>
    </motion.div>
  )
};

export default Team;
