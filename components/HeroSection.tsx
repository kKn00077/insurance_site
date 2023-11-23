"use client";
import { fadeIn, fullScreen, mainBackgroundColor } from "@/style";
import { motion } from "framer-motion";

export const HeroSection = () => {
    return (
        <div className={`${fullScreen} flex flex-col justify-center items-center pt-20 mb-[120px]`}>
            {/* <motion.div className="bg-gray-500 w-[155px] h-[24px] rounded-2xl mb-6"></motion.div> */}
            <div className="flex flex-col gap-2">
                <motion.h1
                    className={`text-2xl text-center font-bold`}
                    {...fadeIn}
                    transition={{ delay: 0.2 }}
                >
                    보험 한 개로 명품 가방
                    <br /> 한 박스 받아가세요
                </motion.h1>
                <motion.p
                    className={`text-center mt-2 text-sm mb-8 text-[#4B4B4B]`}
                    {...fadeIn}
                    transition={{ delay: 0.5 }}
                >
                    나이 때문에 많이 나오는 보험료도 한 방에 정리
                </motion.p>
                <motion.a
                    href="#form"
                    className={`text-center rounded-2xl px-9 py-2 text-white bg-[#1c8549] hover:bg-[#215236]`}
                    {...fadeIn}
                    transition={{ delay: 0.7 }}
                >
                    <p>상담 신청 하기</p>
                </motion.a>
            </div>
        </div>
    );
};
