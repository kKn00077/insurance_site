"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import ArrowIcon from "@/public/arrow_down.svg";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const Fqa = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControl = useAnimation();
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    useEffect(() => {
        if (isInView) {
            mainControl.start("visible");
        }
    }, [isInView, mainControl]);

    return (
        <div
            ref={ref}
            className="mt-[180px] flex flex-col justify-center items-center text-2xl w-full"
        >
            <motion.h1
                className="text-[#1c8549] font-bol mb-8"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={mainControl}
            >
                자주 물어보시는 질문
            </motion.h1>
            <motion.div
                className="flex flex-col items-center gap-6"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={mainControl}
                transition={{ delay: 0.4 }}
            >
                <Accordion title="계속 문자가 오나요?" content="아닙니다." />
                <Accordion title="보험 보장분석을 하면 돈이 드나요?" content="아닙니다. 분석만 도와드립니다." />
                <Accordion title="보험 가입 강요가 있나요?" content="없습니다. 언제나 필요하신 분만 가입해드립니다." />
                <Accordion title="받은 분석을 다시 보려는데 확인이 안됩니다." content="3일이 지나면, 모바일 분석을 보실 수 없습니다." />
            </motion.div>
        </div>
    );
};

const Accordion = ({ title, content }: { title: string; content: string }) => {
    const [isClicked, setClicked] = useState(false);
    return (
        <div
            onClick={() => {
                setClicked(!isClicked);
            }}
            className="w-[320px]"
        >
            <div className="flex justify-between">
                <p className="text-sm">{title}</p>
                <Image
                    width={24}
                    height={24}
                    src={ArrowIcon}
                    alt="arrow icon"
                    className={
                        isClicked
                            ? "rotate-180 transition-all duration-100"
                            : "transition-all duration-100"
                    }
                />
            </div>
            <div className={isClicked ? "block text-sm transition-all duration-100" : "hidden"}>
                {content}
            </div>
        </div>
    );
};
