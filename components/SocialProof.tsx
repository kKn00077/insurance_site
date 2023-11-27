"use client";
import { fromRight, fromLeft } from "@/style";
import { AnimatePresence, motion, wrap } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const SocialProof = () => {
    const [page, setPage] = useState(0);
    const data = [
        {
            src: "/smile.jpg",
            info: "김옥자 (54세, 가정주부)",
            comment: `요즘같은 인플레이션에 비용절감 그리고 노후준비까지 해서 걱정없게 됐어요. 감사합니다!`,
        },
        {
            src: "/women.jpg",
            info: "김연정 (32세, 직장인)",
            comment: `20년 넘게 만성 질병이라 포기했는데 상상치도 못했던 보장 내용이 실비로도 가능하다는 걸 알고 꾸준히 병원에 다녀서 드디어 완치했어요!`,
        },
    ];
    const dataIndex = wrap(0, data.length, page);

    useEffect(() => {
        const timer = setInterval(() => {
            setPage((page) => page + 1);
        }, 5000);

        return () => {
            clearInterval(timer)
        };
    });


    return (
        <div className="flex flex-col justify-center items-center">
            <motion.h1
                className="text-[#1c8549] font-bold text-2xl flex flex-col gap-8"
                {...fromRight}
                transition={{ delay: 1.2 }}
                >
                생생한 고객 후기
            </motion.h1>

                <motion.div className="h-20" {...fromRight} transition= {{ delay: 1.3 }} viewport={{ once: true }}>
                    
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            className="flex flex-col items-center justify-center gap-2"
                            {...fromRight}
                            exit={{ opacity:0, x: -20, transition: {duration: 0.8} }}
                            key={page}
                        >
                            <div className="flex gap-2 mt-8">
                                <Image
                                    width={24}
                                    height={24}
                                    src={data[dataIndex].src}
                                    alt="profile"
                                    className="rounded-full"
                                />
                                <p className="text-xs text-[#4B4B4B]">{data[dataIndex].info}</p>
                            </div>
                            <p className="text-center text-sm">{data[dataIndex].comment}</p>
                        </motion.div>
                    </AnimatePresence>

                </motion.div>

        </div>
    );
};
