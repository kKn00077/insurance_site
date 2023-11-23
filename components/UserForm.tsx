"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const UserForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControl = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControl.start("visible");
        }
    }, [isInView, mainControl]);

    return (
        <motion.div
            ref={ref}
            className="flex flex-col justify-center items-center mt-[180px] w-[320px] py-8 px-8 rounded-2xl gap-10 bg-white shadow-xl"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 0.8 }}
            id="form"
        >
            <p className="mb-4">상담 신청서</p>
            <div className="flex flex-col justify-center items-center gap-4">
                <div>
                    <input
                        type="text" required
                        placeholder="* 성함"
                        className="w-[256px] h-[40px] rounded-lg px-4 py-1 border border-[#969696]"
                    />
                </div>
                <div>
                    <input
                        type="date" required
                        data-placeholder="* 생년월일"
                        className="w-[256px] h-[40px] rounded-lg px-4 py-1 border border-[#969696]"
                    />
                </div>
                <div>
                    <input
                        type="tel" required
                        placeholder="* 전화번호"
                        className="w-[256px] h-[40px] rounded-lg px-4 py-1 border border-[#969696]"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <input type="checkbox" />
                    <p className="text-[#4B4B4B] text-xs">개인 정보 수집 동의 (필수)</p>
                </div>
                <div className="flex gap-2 text-red-500">
                    *
                    <p className="text-[10px]">
                        수집목적 - 내 보험분석/컨설팅<br></br>
                        개인정보를 제공받는 자 - 23058078 PA<br></br>
                        필수항목 - 이름, 생년월일, 전화번호<br></br>
                        보유이용기간 - 3개월
                    </p>
                </div>
                <button className="w-[256px] rounded-2xl bg-[#1C8549] py-2 text-white">
                    상담 신청하기
                </button>
            </div>
        </motion.div>
    );
};
