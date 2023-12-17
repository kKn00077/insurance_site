"use cliet";

import { fromLeft } from "@/style";
import { motion, useAnimation, useInView } from "framer-motion";
import CheckIcon from "@/public/icon_checked.svg";
import DoubleIcon from "@/public/icon_Chat_Double.svg";
import PlusIcon from "@/public/icon_plus.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const Benefit = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const mainControl = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControl.start("fromLeft");
        }
    }, [inView, mainControl]);
    return (
        <div className="flex flex-col justify-center items-center mt-[180px] gap-8" ref={ref}>
            <motion.h1
                className="text-[#1c8549] font-bold text-2xl"
                variants={{ hidden: { opacity: 0, x: -20 }, fromLeft: { opacity: 1, x: 0 } }}
                initial="hidden"
                animate={mainControl}
            >
                보장된 혜택
            </motion.h1>
            <div className="flex flex-col gap-2 justify-center items-center">
                <motion.div
                    className=" rounded-2xl px-4 py-2 bg-white flex gap-2"
                    variants={{ hidden: { opacity: 0, x: -20 }, fromLeft: { opacity: 1, x: 0 } }}
                    initial="hidden"
                    animate={mainControl}
                    transition={{ delay: 0.25 }}
                >
                    <Image width={24} height={24} src={CheckIcon} alt="check_icon" />
                    <p className="w-[256px] text-center">보험 수령 가능성 체크</p>
                </motion.div>
                <motion.div
                    className=" rounded-2xl px-4 py-2 bg-white flex gap-2"
                    variants={{ hidden: { opacity: 0, x: -20 }, fromLeft: { opacity: 1, x: 0 } }}
                    initial="hidden"
                    animate={mainControl}
                    transition={{ delay: 0.5 }}
                >
                    <Image width={24} height={24} src={DoubleIcon} alt="check_icon" />
                    <p className="w-[256px] text-center">각종 중요 이슈 정보 혜택</p>
                </motion.div>
                <motion.div
                    className=" rounded-2xl px-4 py-2 bg-white flex gap-2"
                    variants={{ hidden: { opacity: 0, x: -20 }, fromLeft: { opacity: 1, x: 0 } }}
                    initial="hidden"
                    animate={mainControl}
                    transition={{ delay: 0.75 }}
                >
                    <Image width={24} height={24} src={PlusIcon} alt="check_icon" />
                    <p className="w-[256px] text-center">상상하지 못한 건강검진 혜택</p>
                </motion.div>
            </div>
        </div>
    );
};
