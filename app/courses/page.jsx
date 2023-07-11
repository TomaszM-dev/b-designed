"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import card1 from "public/move.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import card2 from "public/streaming.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll/useScroll";
import {
  scrollLeft,
  scrollReveal,
  scrollRight,
  up,
  fade,
} from "../components/animations/animation";

const Courses = () => {
  const [element, controls] = useScroll();
  return (
    <div className="flex flex-col justify-start items-center gap-10 mt-[8rem]">
      <motion.h1
        variants={up}
        animate={controls}
        initial="hidden"
        ref={element}
        className="text-[2.7rem] text-center font-[700] leading-[3.3rem] mb-5 w-[80%] mx-auto"
      >
        Choose our course <span className="gradientText">Enroll Now</span> and
        see how your skills goes through a roof!
      </motion.h1>
      <div className="flex items-center  gap-20 w-[90%] mt-6 flex-1  relative  cursor-pointer  rounded-2xl">
        <motion.div
          variants={scrollLeft}
          animate={controls}
          initial="hidden"
          ref={element}
          className="w-full h-[29rem] cursor-pointer  relative  flex  flex-col rounded-2xl  overflow-hidden group"
        >
          <Image
            className="  w-full h-[55%] grayFilter  object-cover  block"
            src={card1}
          ></Image>

          <div className="absolute bottom-0  flex flex-col gap-7 items-center   transition-all  p-10 h-[45%] text-secondary  bg-tertirary group-hover:h-[68%] group ">
            <h2 className="text-[1.3rem] font-[700] text-secondary">
              {" "}
              Build an Ai powered Apple app with Figma and{" "}
              <span className="gradientText">our Course</span>
            </h2>
            <div className="flex ">
              <FontAwesomeIcon
                className="h-[1.2rem] text-gold "
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="h-[1.2rem] text-gold"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="h-[1.2rem] text-gold"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="h-[1.2rem] text-gold"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="h-[1.2rem] text-gold"
                icon={faStar}
              ></FontAwesomeIcon>
              <p className="pl-4">4.7/5, based on 97 reviews</p>
            </div>
            <div className="opacity-0  transition-all group-hover:opacity-100 flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda quasi nostrum
              </p>
              <Link href="courses/filmpire">
                <button className="px-6 py-2  bg-main w-fit rounded-2xl self-end">
                  Learn More →
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          href="courses/nft-marketplace"
          variants={scrollRight}
          animate={controls}
          initial="hidden"
          ref={element}
          className="w-full h-[29rem] cursor-pointer  relative  flex  flex-col rounded-2xl  overflow-hidden group"
        >
          <Image
            className="  w-full h-[55%] grayFilter  object-cover  block"
            src={card2}
          ></Image>

          <div className="absolute bottom-0  flex flex-col gap-7 items-center   transition-all  p-10 h-[45%] text-secondary  hover:opacity-100 bg-tertirary group-hover:h-[68%] group ">
            <h2 className="text-[1.3rem] font-[700] text-secondary">
              {" "}
              Build an Nft marketplace and of dev 3.0
              <span className="gradientText"> dive into the world</span>
            </h2>
            <div className="flex ">
              <FontAwesomeIcon
                className="h-[1.2rem] text-gold "
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="h-[1.2rem] text-gold"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="h-[1.2rem] text-gold"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="h-[1.2rem] text-gold"
                icon={faStar}
              ></FontAwesomeIcon>

              <p className="pl-4">4.3/5, based on 73 reviews</p>
            </div>
            <div className="opacity-0  transition-all group-hover:opacity-100 flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda quasi nostrum
              </p>
              <Link href="courses/nft-marketplace">
                <button className="px-6 py-2 bg-main w-fit rounded-2xl self-end">
                  Learn More →
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
