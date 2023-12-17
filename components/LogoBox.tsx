"use client";

import Logo from "@/public/logo.svg";
import { fadeIn, mainColorBorderBottom } from "@/style";
import { motion } from "framer-motion";
import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const LogoBox = () => {
    return (
        <motion.div
            className={`bg-white py-1 flex flex-col justify-center items-center border-b-1 border-b-[#1c8549]`}
            {...fadeIn}
        >
            {/* <Image width={155} height={25} className="opacity-0" src={Logo} alt="DB손해보험 로고" /> */}
            
            <div className="h-11 flex flex-row justify-center items-center">
                <FontAwesomeIcon className="px-1" icon={faMagnifyingGlass} rotation={90} size="2xl" />
                <FontAwesomeIcon className="px-1" icon={faFileLines} size="xl" />
            </div>
            

        </motion.div>
    );
};
