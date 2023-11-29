import { motion, useScroll, useInView, useMotionValueEvent } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const OurImpact = () => {

    const element = useRef(null);
    const [index, setIndex] = useState(0);

    const handleScroll = () => {
        const rect = element.current.getBoundingClientRect();
        if(rect.bottom <= window.innerHeight && rect.bottom > 0){
            const progress = Math.abs(parseInt((rect.bottom / window.innerHeight) * 100) - 100);
            if(progress <= 25){
                updateIndex(0);
            } else if(progress <= 50){
                updateIndex(1);
            } else if(progress <= 75){
                updateIndex(2);
            } else {
                updateIndex(3);
            }
        }
    }

    const updateIndex = (newIndex) => {
        if(index!== newIndex){
            setIndex(newIndex);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    });

    const Impact = () => (
        <div style={{ width: "100%" }} className="w-full md:w-3/4 bg-checkWhite shadow-2xl px-12 py-8 rounded-carousel flex flex-col gap-y-4">
            <h2 className="font-bold ss:text-[48px] text-[36px] text-checkPrimary600">Our Impact</h2>
            <p className="text-lg md:pr-8 text-gray-700">We've just started for now, but we hope to make a real dent on the problem of misinformation and scams, both in Singapore and around the world.</p>
        </div>
    )   

    const MessagesChecked = () => (
        <div style={{ minWidth: "100%", flexShrink: 0}} className="w-full bg-checkWhite shadow-2xl px-12 py-8 rounded-carousel flex flex-col gap-y-4">
            <h2 className="font-bold ss:text-[48px] text-[36px]">
                <span className="from-checkPrimary600 to-checkSecondaryYellow500 bg-gradient-to-b bg-clip-text text-transparent">320+&nbsp;</span>
                Message <br/>Checked
            </h2>
        </div>
    )

    const MessagesVerified = () => (
        <div style={{ width: "100%" }} className="w-full bg-checkPrimary600 shadow-2xl px-12 py-8 rounded-carousel flex flex-col gap-y-4">
            <h2 className="font-bold ss:text-[48px] text-[36px] text-white">
                50+ Messages <br/>Verified Weekly
            </h2>
        </div>
    )

    const ActiveCheckers = () => (
        <div style={{ width: "100%" }} className="w-full bg-checkSecondaryYellow500 shadow-2xl px-12 py-8 rounded-carousel flex flex-col gap-y-4">
            <h2 className="font-bold ss:text-[48px] text-[36px] text-white">
                &gt;30 Active <br/>Checkers
            </h2>
        </div>
    )

    const elements = [<Impact />, <MessagesChecked />, <MessagesVerified />, <ActiveCheckers />]

    return (
        <div ref={element}>
            {elements[index]}
        </div>
    )
};

export default OurImpact;