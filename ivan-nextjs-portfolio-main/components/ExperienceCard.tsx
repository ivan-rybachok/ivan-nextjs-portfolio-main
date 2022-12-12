import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  const getReadableDate = (date: string) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const d = new Date(date);
    const month = d.getMonth();
    const year = d.getFullYear();
    return `${months[month]}. ${year}`;
  };
  return (
    <article className="px-4 shadow-2xl flex h-[80%] mx-4 md:mx-10 flex-col dark:text-gray_100 rounded-lg py-6 items-start space-y-4 dark:bg-gray_800 max-w-6xl bg-gray_50 overflow-y-auto mt-10">
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 w-full">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="exp-company rounded-full w-16 h-16 md:w-32 md:h-32 object-cover mx-auto lg:mx-1 lg:text-left"
          src={urlFor(experience?.companyImage).url()}
          alt={experience?.company}
        />

        <div className=" flex flex-col items-start space-y-3">
          <h4 className="text-lg lg:text-3xl font-normal">
            {experience?.jobTitle}
          </h4>
          <p className="font-bold text-md lg:text-lg my-2">
            {experience?.company}
          </p>
          <p className="text-sm lg:text-lg dark:text-gray_400 text-gray_700">{`${getReadableDate(
            experience?.dateStarted
          )} - ${
            experience?.isCurrentlyWorkingHere
              ? "Till Date"
              : getReadableDate(experience.dateEnded)
          }`}</p>
          {/* <div className="flex items-center space-x-2 justify-center p-5">
            {experience?.technologies.map((tech) => (
              <div
                className="cursor-pointer rounded-2xl shadow-gray_900 hover:scale-105 transition-all hover:bg-gray_700/20 shadow-sm hover:shadow-md"
                key={tech._id}
              >
                <img
                  src={urlFor(tech.image).url()}
                  alt={tech.title}
                  className={`h-8 rounded-2xl w-8 lg:w-14 lg:h-14 p-px lg:p-1`}
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <ul
        className="list-disc pl-4 px-3 exp-list text-xs md:text-base space-y-2 ml-5  h-56 md:h-60  overflow-y-auto scrollbar-thumb-rounded-md text-justify  pr-5
        scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80"
      >
        {experience?.points
          ?.filter((point) => point.trim())
          .map((point) => (
            <li key={point}>{point}</li>
          ))}
      </ul>
    </article>
  );
};

export default React.memo(ExperienceCard);
