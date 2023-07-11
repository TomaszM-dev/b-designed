"use client";
import React from "react";
import firm1 from "public/rapidapi.png";
import firm2 from "public/hostinger.png";
import firm3 from "public/sanity.png";
import firm4 from "public/geeks.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faMedal,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useScroll } from "../useScroll/useScroll";
import {
  scrollLeft,
  scrollReveal,
  scrollRight,
  up,
} from "../animations/animation";
import { motion } from "framer-motion";

const OurOffer = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div className="flex flex-col gap-20 text-secondary">
      <div className="mt-20">
        <motion.h1
          variants={up}
          animate={controls}
          initial="hidden"
          ref={element}
          className="text-[2.8rem] text-center font-[700] leading-[3.3rem] mb-5 w-[90%] mx-auto"
        >
          Ditch Theory<span className="gradientText"> Courses and Enter</span>{" "}
          Driven the World of a True Developer
          <span className="gradientText"> best designers</span>
        </motion.h1>
        <motion.div
          variants={scrollReveal}
          animate={controls}
          initial="hidden"
          ref={element}
          className="flex gap-10 mt-20 items-stretch"
        >
          <div className=" flex flex-col items-center gap-5 bg-tertirary px-5 py-[4rem] rounded-lg">
            <FontAwesomeIcon
              icon={faMessage}
              className="h-[2rem] w-[2rem] p-[1.3rem] mb-3 bg-main rounded-3xl"
            ></FontAwesomeIcon>
            <h2 className="text-[1.4rem] font-[700]">
              Expert Coaching Support
            </h2>
            <p className="text-[1.1rem]">
              Gain 24/7 access to a private community of coders looking to
              advance their knowledge and experience, as well as their careers.
            </p>
          </div>

          <div className=" flex flex-col items-center gap-5 bg-tertirary px-5 py-[4rem] rounded-lg">
            <FontAwesomeIcon
              icon={faMedal}
              className="h-[2rem] w-[2rem] p-[1.3rem] mb-3 bg-main rounded-3xl"
            ></FontAwesomeIcon>
            <h2 className="text-[1.4rem] font-[700]">
              Real-world experience grow
            </h2>
            <p className="text-[1.1rem]">
              Theory will only get you so far, but building projects from the
              ground up will bolster your career in the software development
              space.
            </p>
          </div>

          <div className=" flex flex-col items-center gap-5 bg-tertirary px-5 py-[4rem] rounded-lg">
            <FontAwesomeIcon
              icon={faDatabase}
              className="h-[2rem] w-[2rem] p-[1.3rem] mb-3 bg-main rounded-3xl"
            ></FontAwesomeIcon>
            <h2 className="text-[1.4rem] font-[700]">
              B-designed Pro Certificates
            </h2>
            <p className="text-[1.1rem]">
              Gain 24/7 access to a private community of coders looking to
              advance their knowledge and experience, as well as their careers.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center mt-10 ">
        <div className="flex-[0_0_30%]  h-[1px] bg-secondary"></div>
        <p className="flex-1 text-center">
          B-designed is trusted by several industry leaders
        </p>
        <div className="flex-[0_0_30%] w-full h-[1px] bg-secondary"></div>
      </div>
      <div className="flex gap-20 mt-[-2rem]">
        <div>
          <Image src={firm1}></Image>
        </div>
        <div>
          <Image src={firm2}></Image>
        </div>
        <div>
          <Image src={firm3}></Image>
        </div>
        <div>
          <Image src={firm4}></Image>
        </div>
      </div>
    </motion.div>
  );
};

export default OurOffer;
