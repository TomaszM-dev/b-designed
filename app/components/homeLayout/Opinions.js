"use client";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import person from "public/person.png";
import { useScroll } from "../useScroll/useScroll";
import {
  scrollLeft,
  scrollReveal,
  scrollRight,
  up,
} from "../animations/animation";
import { motion } from "framer-motion";

const Opinions = () => {
  const [element, controls] = useScroll();
  return (
    <div className="my-20 flex flex-col items-center ">
      <motion.h1
        variants={up}
        animate={controls}
        initial="hidden"
        ref={element}
        className="text-[2.8rem] text-center font-[700] leading-[3.3rem] mb-5 w-[90%] mx-auto"
      >
        Our <span className="gradientText">Global Students</span> Say it best
      </motion.h1>
      <motion.div
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
        className="grid grid-cols-2 mt-10 gap-6  "
      >
        <div className="flex flex-col  bg-tertirary py-10 px-6 gap-7 rounded-3xl ">
          <div className="flex justify-between items-center gap-3">
            <Image
              src={person}
              className="w-14 h-14 rounded-[50%] object-cover "
            ></Image>
            <div className="flex-1 ">
              <h2 className="text-[1.3rem] font-[600] ">Tomas Kowalski</h2>
              <p className="text-secondarytext">Web developer</p>
            </div>
            <div className="flex text-gold self-start mt-2">
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam
            ipsum mollitia dolor quod quasi? Illo temporibus voluptatum
            molestiae aliquam dolorum ullam alias natus voluptatem, obcaecati
            rerum eum esse consequatur. Eveniet corporis qui quae aperiam,
            tempore laboriosam voluptas dicta
          </p>
        </div>
        <div className="flex flex-col  bg-tertirary py-10 px-6 gap-7 rounded-3xl h-fit ">
          <div className="flex justify-between items-center gap-3">
            <Image
              src={person}
              className="w-14 h-14 rounded-[50%] object-cover "
            ></Image>
            <div className="flex-1 ">
              <h2 className="text-[1.3rem] font-[600] ">Michael Essa</h2>
              <p className="text-secondarytext">Graphic Designer</p>
            </div>
            <div className="flex text-gold self-start mt-2">
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam
            ipsum mollitia dolor quod quasi? Illo temporibus voluptatum
          </p>
        </div>
        <div className="flex flex-col  bg-tertirary py-10 px-6 gap-7 rounded-3xl  h-fit">
          <div className="flex justify-between items-center gap-3">
            <Image
              src={person}
              className="w-14 h-14 rounded-[50%] object-cover "
            ></Image>
            <div className="flex-1 ">
              <h2 className="text-[1.3rem] font-[600] ">Kamil Meling</h2>
              <p className="text-secondarytext">Student</p>
            </div>
            <div className="flex text-gold self-start mt-2">
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam
            ipsum mollitia dolor quod quasi? Illo temporibus voluptatum
            molestiae aliquam dolorum ullam alias natus voluptatem, obcaecati
            rerum eum esse consequatur.
          </p>
        </div>
        <div className="flex flex-col  bg-tertirary py-10 px-6 gap-7 rounded-3xl mt-[-3rem] ">
          <div className="flex justify-between items-center gap-3 ">
            <Image
              src={person}
              className="w-14 h-14 rounded-[50%] object-cover "
            ></Image>
            <div className="flex-1 ">
              <h2 className="text-[1.3rem] font-[600] ">Elton John</h2>
              <p className="text-secondarytext">Web developer</p>
            </div>
            <div className="flex text-gold self-start mt-2">
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam
            ipsum mollitia dolor quod quasi? Illo temporibus voluptatum
            molestiae aliquam dolorum ullam alias natus voluptatem, obcaecati
            rerum eum esse consequatur. Eveniet corporis qui quae aperiam,
            tempore laboriosam voluptas dicta Lorem ipsum, dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col  bg-tertirary py-10 px-6 gap-7 rounded-3xl ">
          <div className="flex justify-between items-center gap-3">
            <Image
              src={person}
              className="w-14 h-14 rounded-[50%] object-cover "
            ></Image>
            <div className="flex-1 ">
              <h2 className="text-[1.3rem] font-[600] ">Tomas Kowalski</h2>
              <p className="text-secondarytext">Web developer</p>
            </div>
            <div className="flex text-gold self-start mt-2">
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam
            ipsum mollitia dolor quod quasi? Illo temporibus voluptatum
            molestiae aliquam dolorum ullam alias natus voluptatem, obcaecati
            rerum eum esse consequatur. Eveniet corporis qui quae aperiam,
            tempore laboriosam voluptas dicta
          </p>
        </div>
        <div className="flex flex-col  bg-tertirary py-10 px-6 gap-7 rounded-3xl h-fit ">
          <div className="flex justify-between items-center  gap-3">
            <Image
              src={person}
              className="w-14 h-14 rounded-[50%] object-cover "
            ></Image>
            <div className="flex-1 ">
              <h2 className="text-[1.3rem] font-[600] ">Tomas Kowalski</h2>
              <p className="text-secondarytext">Web developer</p>
            </div>
            <div className="flex text-gold self-start mt-2">
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} className="h-4"></FontAwesomeIcon>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam
            ipsum mollitia dolor quod quasi? Illo temporibus voluptatum
            molestiae aliquam dolorum ullam alias natus voluptatem, obcaecati
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Opinions;
