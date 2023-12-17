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
                    나이와 함께 올라가는 보험료
                    <br /> 한 방에 정리하세요!
                </motion.h1>
                <motion.p
                    className={`text-center mt-2 text-sm mb-8 text-[#4B4B4B]`}
                    {...fadeIn}
                    transition={{ delay: 0.5 }}
                >
                    보험은 주식과 코인처럼 계속 점검이 필요합니다
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
