"use client";
import React from "react";

import film from "public/f1.png";
import Image from "next/image";
import { useScroll } from "../useScroll/useScroll";
import {
  scrollLeft,
  scrollReveal,
  scrollRight,
  up,
} from "../animations/animation";
import { motion } from "framer-motion";

const Video = () => {
  const [element, controls] = useScroll();
  return (
    <div className="mt-20 flex flex-col gap-3">
      <motion.div
        variants={up}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2 className="text-[3.4rem] text-center font-[700]">
          Welcome to <span className="gradientText">B-designed </span>
        </h2>
        <p className="text-center w-[79%] mx-auto font-[500] text-[1.2rem]">
          Hands-on projects are the most practical way to learn a programming
          language and build your portfolio. If you're tired of building "to-do"
          apps and learning theory, JS Mastery Pro can help you solidify your
          knowledge and start taking on meaningful projects that will set the
          tone for your career.
        </p>
      </motion.div>
      <motion.div
        transition={{ delay: 1 }}
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        className="mt-10 w-[80%] mx-auto relative rounded-3xl overflow-hidden "
      >
        <Image
          src={film}
          className="w-full h-[32rem]  object-cover mx-auto mt-10 "
        ></Image>
      </motion.div>
    </div>
  );
};

export default Video;
