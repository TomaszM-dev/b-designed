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
  const scrollLeft = {
    hidden: {
      x: -300,
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 0.1,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 0.4,
      },
    },
  };
  const scrollRight = {
    hidden: {
      opacity: 0,
      x: 300,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 0.1,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 0.4,
      },
    },
  };

  return (
    <div className="mt-[8rem]  max-lg:w-[70%] max-lg:mx-auto max-md:w-[100%]">
      <motion.div className="flex items-center gap-[10rem]  max-lg:flex-col  max-lg:gap-20 ">
        <motion.div
          variants={scrollLeft}
          whileInView={"show"}
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
          variants={scrollLeft}
          whileInView={"show"}
          initial="hidden"
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
