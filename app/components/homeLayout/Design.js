"use client";
import React from "react";
import { useScroll } from "../useScroll/useScroll";
import {
  scrollLeft,
  scrollReveal,
  scrollRight,
  up,
} from "../animations/animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Design = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      className="border-[3px] w-[75%] max-md:w-[100%] h-fit py-10 mx-auto border-main  relative flex flex-col gap-10 items-center justify-center "
    >
      <div className="p-4 border-2 border-main absolute top-[-1rem] left-[-1rem] bg-background "></div>
      <div className="p-4 border-2 border-main absolute top-[45%] left-[-1.3rem] bg-background "></div>
      <div className="p-4 border-2 border-main absolute bottom-[-1rem] left-[-1.3rem] bg-background "></div>
      <div className="p-4 border-2 border-main absolute bottom-[-1rem] right-[-1.3rem] bg-background "></div>
      <div className="p-4 border-2 border-main absolute top-[45%] right-[-1.3rem] bg-background "></div>
      <div className="p-4 border-2 border-main absolute top-[-1rem] right-[-1.3rem] bg-background "></div>
      <p className="text-secondarytext uppercase font-[600]">
        Learn how to create beautifull design
      </p>
      <h2 className="gradientText text-[3.6rem] font-[700] text-center leading-[3.3rem]">
        The B-designed masterclass experience
      </h2>
      <p className="w-[70%] text-center text-[1.2rem] font-[500]">
        Showcase your expertise to employers with exciting projects where you'll
        build real-world applications and have your code reviewed by industry
        experts.
      </p>
      <p className="w-[70%] text-center text-[1.2rem] font-[500]">
        Learn how to position yourself for a rewarding career with weekly live
        Q&As, mock interviews
      </p>
      <button className="px-10 py-3 bg-main rounded-xl text-secondary">
        Learn more →
      </button>
    </motion.div>
  );
};

export default Design;
