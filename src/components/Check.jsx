import { arrowUp, arrowRight } from "../assets";
import {
  AnimatePresence,
  useScroll,
  motion,
  useTransform,
  easeInOut,
  cubicBezier,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Check = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const { t } = useTranslation();

  // handle the change of text in Check dubious ...
  const TextLoop = ({ texts, height }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        let next = index + 1;
        if (next === texts.length) {
          next = 0;
        }
        setIndex(next);
      }, 3 * 1000);
    }, [index, setIndex]);

    return (
      <div className="text-checkPrimary600">
        <AnimatePresence initial={false}>
          <motion.span
            position="relative"
            key={index}
            layout
            variants={{
              enter: {
                translateY: -20,
                opacity: 0,
                // height: 0,
              },
              center: {
                zIndex: 1,
                translateY: 0,
                opacity: 1,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              exit: {
                zIndex: 0,
                opacity: 0,
                height: 0,
              },
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              translateY: { type: "spring", stiffness: 1000, damping: 10 },
              opacity: { duration: 0 },
            }}
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="w-100 mt-20">
      <motion.div className="block">
        <motion.div className="overflow-x-hidden h-full">
          <h1 className="text-[40px] md:text-[64px] w-full flex flex-col ss:flex-row justify-center flex-1 font-poppins font-bold text-checkShadeDark text-center pb-24">
            <span className="flex-nowrap">{t("check.title")}&nbsp;</span>
            <div className="text-loop-container">
              <TextLoop
                texts={t("check.title_subtext", { returnObjects: true })}
              />
            </div>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="bg-checkBG sm:px-16 px-6 flex flex-col justify-center items-center">
            <div className="xl:max-w-[1280px] w-full flex flex-col justify-center">
              {/** Text block */}
              <h2 className="text-checkPrimary600 font-bold leading-nogine font-poppins tracking-wide text-center text-[36px] sm:text-[48px] md:text-[64px] px-0 sm:px-8 md:px-16">
                {t("check.text_block")} <br />
                {t("check.hashtag")}
              </h2>

              {/** CTA */}
              <div className="flex flex-col ss:flex-row gap-x-6 gap-y-6 pt-24 w-full justify-center mx-auto">
                <a
                  href="/about"
                  className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkWhite font-workSans font-medium rounded-[50px] px-5 py-4 text-center max-w-sm"
                >
                  <span className="text-checkPrimary600 text-[16px] ss:text-[20px]">
                    {t("check.cta")}
                  </span>
                  <img src={arrowUp} className="fill-checkPrimary600" />
                </a>
                {/*<a
                  href="https://bit.ly/add-checkmate"
                  className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans font-medium rounded-[50px] px-5 py-4 text-center max-w-sm"
                >
                  <span className="text-checkWhite text-[16px] ss:text-[20px]">Join as a fact checker</span>
                  <img src={arrowRight} />
  </a>*/}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Check;
