import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { Technology } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionTop?: boolean;
  skill: Technology;
  setSelectedSkill: Dispatch<SetStateAction<string>>;
};

const Skill = ({ directionTop, skill, setSelectedSkill }: Props) => {
  return (
    <motion.div
      whileTap={{
        [directionTop ? "rotateY" : "rotateX"]: directionTop ? 1000 : -1000,
        scale: 1.5,
      }}
      transition={{ duration: 0.6 }}
      onClick={() => setSelectedSkill(skill.title)}
      className="p-1 dark:hover:bg-gray_800/30 shadow-md hover:bg-gray_200 bg-white/70 dark:bg-transparent shadow-gray_800/80 rounded-2xl transition-colors duration-300 relative flex cursor-pointer"
    >
      <motion.img
        initial={{
          y: directionTop ? -100 : 100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-16 w-16 lg:h-20 lg:w-20 rounded-2xl p-1 z-50 border-gray-500 object-fill filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill.image).url()}
      />
    </motion.div>
  );
};

export default Skill;
