"use client";
import React from "react";
import hero from "public/hero.png";
import Button from "../button/Button";
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

const Hero = () => {
  const [element, controls] = useScroll();

  console.log(element);
  return (
    <div className="mt-[8rem]  max-lg:w-[70%] max-lg:mx-auto max-md:w-[100%]">
      <motion.div className="flex items-center gap-[10rem]  max-lg:flex-col  max-lg:gap-20 ">
        <motion.div
          variants={scrollLeft}
          animate={controls}
          initial="hidden"
          ref={element}
          className="flex-1 flex-col flex gap-[2rem]"
        >
          <h1 className="text-[4.2rem]  font-[700] gradientText leading-[5rem] ">
            Better desing for your digital product
          </h1>
          <p className="text-[1.3rem]">
            Turning your idea into reality. We bring together the teams from the
            global tech industry
          </p>
          <Button url="/courses" text="See our Products"></Button>
        </motion.div>
        <motion.div
          variants={scrollRight}
          animate={controls}
          initial="hidden"
          ref={element}
          className="flex-1 flex-col flex gap-[5rem] "
        >
          <Image
            src={hero}
            className="w-full h-full object-cover  animate-[move_3s_ease_infinite]"
          ></Image>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
