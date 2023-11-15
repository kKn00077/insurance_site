"use client";
import { fromRight } from "@/style";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const SocialProof = () => {
    const [dummyData, setDummyData] = useState([
        {
            info: "김옥자 여(54세, 가정주부)",
            comment: `Lorem ipsum dolor sit amet, Lorem ipsum
                    \n dolor sit amet`,
        },
        {
            info: "박경자 여(64세, 가정주부)",
            comment: `Lorem ipsum dolor sit amet, Lorem ipsum
                    \n dolor sit amet`,
        },
    ]);

    return (
        <div className="flex flex-col justify-center items-center">
            <motion.h1
                className="text-[#1c8549] font-bold text-2xl flex flex-col gap-8"
                {...fromRight}
                transition={{ delay: 1.2 }}
            >
                생생한 고객 후기
            </motion.h1>
            <motion.div
                className="flex flex-col items-center justify-center gap-2"
                {...fromRight}
                transition={{ delay: 1.3 }}
            >
                <div className="flex gap-2 mt-8">
                    <Image
                        width={24}
                        height={24}
                        src="/smile.jpg"
                        alt="profile"
                        className="rounded-full"
                    />
                    <p className="text-xs text-[#4B4B4B]">{dummyData[0].info}</p>
                </div>
                <p className="text-center text-sm">{dummyData[0].comment}</p>
            </motion.div>
        </div>
    );
};
