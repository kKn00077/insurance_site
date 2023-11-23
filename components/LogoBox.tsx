"use client";

import Logo from "@/public/logo.svg";
import { fadeIn, mainColorBorderBottom } from "@/style";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoBox = () => {
    return (
        <motion.div
            className={`bg-white py-1 flex flex-col justify-center items-center border-b-1 border-b-[#1c8549]`}
            {...fadeIn}
        >
            <Image width={155} height={25} className="opacity-0" src={Logo} alt="DB손해보험 로고" />
        </motion.div>
    );
};
