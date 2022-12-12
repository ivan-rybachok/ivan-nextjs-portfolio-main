import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center "
    >
      <div className="border animate-ping border-gray_800/20 transition-colors duration-500 dark:border-gray_800 absolute mt-52 h-[150px] md:h-[200px] md:w-[200px] w-[150px] rounded-full"></div>
      <div className="border border-gray_800/20 transition-colors duration-500 dark:border-gray_800 absolute mt-52 md:h-[300px] h-[225px] md:w-[300px] w-[225px]  rounded-full"></div>
      <div className="border border-gray_800/20 transition-colors duration-500 dark:border-gray_800 absolute mt-52 md:h-[500px] md:w-[500px] h-[375px] w-[375px] rounded-full"></div>
      <div className="border border-[#F7AB0A] absolute mt-52 md:h-[650px] md:w-[650px] h-[487px] w-[487px] rounded-full animate-pulse"></div>
      <div className="border border-gray_800/20 transition-colors duration-500 dark:border-gray_800 absolute mt-52 md:h-[800px] md:w-[800px] h-[600px] w-[600px] rounded-full"></div>
    </motion.div>
  );
};

export default BackgroundCircles;
