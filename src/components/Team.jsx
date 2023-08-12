import styles from "../style";
import { team01, team02, team03, team04, team05, team06 } from "../assets"
import { useScroll, motion, useSpring } from "framer-motion";

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
  { name: "Bing Wen Tan", title: "Founder", image: team01 },
  { name: "Amanda Goh", title: "New Gen AI", image: team02 },
  { name: "Vincent Teyssier", title: "CTO", image: team03 },
]

const Member = ({ name, title, image }) => (
  <div className="flex flex-col pb-24 pl-6 gap-y-2 text-left">
    <img className="h-full w-auto object-cover" src={image} alt={name} />
    <div>
      <p className="font-semibold">{name}</p>
      <p>{title}</p>
    </div>
  </div>
)

const Team = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
      <div className="h-96 flex">
        {members.map((member, index) => (
          <Member key={index} {...member} />
        ))}
      </div>
  )
};

export default Team;
