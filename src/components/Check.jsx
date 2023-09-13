import { team01, team02, team03, team04, team05, team06, arrowUp, arrowRight } from "../assets"
import { AnimatePresence, useScroll, motion, useTransform, easeInOut, cubicBezier } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { getCurrentBreakpoint } from "../utils/breakpoints";

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
const containerHeightMultiplier = 2; //multiplier of window height- the bigger the number, the slower the scrolling
const lpadding = 6;

// setting height/width through tailwind [] arbitrary values seems to be inconsistent
const paddingInPx = lpadding * 4;

const Member = ({ name, title, image }) => (
  <div className={`flex flex-col pl-${lpadding} gap-y-2 text-left`}>
    <img className="h-auto object-cover md:w-72 sm:w-48 w-36" src={image} alt={name} />
    <div>
      <p className="font-medium text-checkBlack">{name}</p>
      <p className="text-checkBlack">{title}</p>
    </div>
  </div>
)

const Check = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [fullWidth, setFullWidth] = useState(0);
  const [index, setIndex] = useState(0);


  const updateSizes = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
    let imageSize;
    switch (getCurrentBreakpoint()) {
      case "xs":
      case "ss":
        imageSize = 36;
        break;
      case "sm":
        imageSize = 48;
        break;
      default:
        imageSize = 72;
    }
    const imageSizeInPx = imageSize * 4;

    setFullWidth(imageSizeInPx * members.length + paddingInPx * (members.length + 1));
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      updateSizes();
    });
    updateSizes();
  }, []);

  // handle the change of text in Check dubious ...
  const TextLoop = ({ texts }) => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        let next = index + 1;
        setIndex(next % texts.length);
      }, 3 * 1000);
    }, [index, setIndex, texts]);
  
    return (
      <h1 className="text-checkPrimary600">
        <AnimatePresence initial={false}>
          <motion.span
            position="absolute"
            key={index}
            layout
            variants={{
              enter: {
                translateY: 20,
                opacity: 0,
                height: 0
              },
              center: {
                zIndex: 1,
                translateY: 0,
                opacity: 1,
                height: "auto"
              },
              exit: {
                zIndex: 0,
                translateY: -20,
                opacity: 0,
                height: 0
              }
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              translateY: { type: "spring", stiffness: 1000, damping: 200 },
              opacity: { duration: 0.5 }
            }}
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </h1>
    );
  };

  const containerHeight = dimensions.height * containerHeightMultiplier;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const y = useTransform(
    scrollYProgress,
    [0, 0.9],
    [`0px`, `${containerHeight - dimensions.height}px`],
    {ease: cubicBezier(.5,0,1,1.05)}
  )
  const x = useTransform(
    scrollYProgress,
    [0.25, 0.85],
    ["0px", `${-fullWidth + dimensions.width - paddingInPx}px`],
    { ease: easeInOut }
  )

  return (
    <div className="w-100" style={{ height: `${containerHeight}px` }} ref={containerRef}>
      <motion.div className="block" style={{ maxHeight: `${dimensions.height}px`, y }}>
        <motion.div className="overflow-x-hidden">
          <h1 className="text-[48px] md:text-[64px] flex flex-row justify-center flex-1 font-poppins font-bold text-checkShadeDark text-center pb-24">
            Check dubious&nbsp;
            <TextLoop texts={["messages", "email", "flyers", "QR codes"]} />
          </h1>
          <motion.div className="flex w-max" style={{ x }}>
            {members.map((member, index) => (
              <Member key={index} {...member} />
            ))}
          </motion.div>
        </motion.div>
        <motion.div>
          <div className="bg-checkBG mt-24 sm:px-16 px-6 flex flex-col justify-center items-center">
            <div className="xl:max-w-[1280px] w-full flex flex-col justify-center">

              {/** Text block */}
              <h2 className="text-checkPrimary600 font-bold leading-none font-poppins tracking-wide text-center text-[36px] sm:text-[48px] md:text-[64px] px-0 sm:px-8 md:px-16">
                CheckMate is powered by a crew of multidisciplinary volunteers who separate fact from fiction using the power of voting and artificial intelligence. <br />#TechForGood
              </h2>

              {/** CTA */}
              <div className="flex flex-row gap-x-6 pt-24 w-full justify-center mx-auto">
                <a
                  href="/about"
                  className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkWhite font-workSans font-medium rounded-[50px] px-5 py-4 text-center max-w-sm"
                >
                  <span className="text-checkPrimary600">Learn more</span>
                  <img src={arrowUp} className="fill-checkPrimary600" />
                </a>
                <a
                  href="https://bit.ly/add-checkmate"
                  className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans font-medium rounded-[50px] px-5 py-4 text-center max-w-sm"
                >
                  <span className="text-checkWhite">Join as a fact checker</span>
                  <img src={arrowRight} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
};

export default Check;
