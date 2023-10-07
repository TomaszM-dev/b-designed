"use client";
import React from "react";
import Image from "next/image";
import contact from "public/contact.png";
import Button from "../components/button/Button";
import contact2 from "public/img4.png";
import Faq from "../components/homeLayout/Faq";
import { useState } from "react";
import { NextResponse } from "next/server";
import { motion } from "framer-motion";
import { useScroll } from "@/app/components/useScroll/useScroll";
import {
  scrollLeft,
  scrollReveal,
  scrollRight,
  up,
  photoAnim,
  fade,
} from "@/app/components/animations/animation";

const Contact = () => {
  const [element, controls] = useScroll();
  const [openPopup, setOpenPopup] = useState(false);
  const [error, setError] = useState(false);

  const closeHandler = () => {
    setOpenPopup(false);
    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    try {
      const res = await fetch("/api/auth/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      res.status === 201 && setOpenPopup(!openPopup);
      e.target.reset();
      res.status === 500 && setError(!error);
    } catch (err) {}
  };

  return (
    <div className="mt-40 flex flex-col  gap-20">
      <div className="flex flex-col gap-10">
        <motion.h1
          variants={up}
          whileInView={"show"}
          initial="hidden"
          className="text-[2.7rem] max-md:text-[2.2rem] text-center font-[700] leading-[3.3rem] mb-20 w-[90%] mx-auto"
        >
          Contact us if you have any specific questions
          <span className="gradientText"> we are happy to help </span>
          our customer support works 24/7
        </motion.h1>
        <div className="flex gap-20 items-center max-lg:flex-col max-lg:mt-10 ">
          <motion.div
            variants={scrollLeft}
            whileInView={"show"}
            initial="hidden"
            className="flex flex-col gap-10 pr-7 w-[95%] flex-1"
          >
            <div className="w-[20%] h-[7px] rounded-2xl mb-[-1.4rem] bg-main"></div>
            <h2 className="text-[2.8rem] font-[700] leading-[3.3rem] ">
              We are here to<span className="gradientText"> Assist you </span>
            </h2>
            <p className="text-[1.3rem] text-secondarytext">
              We value your feedback, questions, and inquiries. If you have any
              thoughts, suggestions, or simply want to get in touch, this is the
              place to do it
            </p>
            <p className="text-[1.3rem] text-secondarytext">
              Contacting us is quick and effortless. Below, you'll find various
              ways to get in touch:
            </p>
          </motion.div>
          <motion.div
            variants={scrollRight}
            animate={controls}
            initial="hidden"
            ref={element}
            className="object-contain w-[50%] max-md:w-[100%]"
          >
            <Image src={contact2} className="object-contain w-full"></Image>
          </motion.div>
        </div>
      </div>
      <Faq />
      <div className="mb-20">
        <h1 className="text-[3.4rem] font-[700] text-center mb-[3.4rem] gradientText ">
          Lets keep in touch
        </h1>
        <div className="flex gap-20 items-center max-lg:flex-col">
          <div className="flex-1">
            <Image
              src={contact}
              className=" animate-[move_3s_ease_infinite] max-lg:w-[50%] max-lg:mx-auto max-sm:w-[80%]"
            ></Image>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-5 font-[600] text-secondarytext max-lg:w-[70%] max-sm:w-[90%]"
          >
            <input
              className="bg-tertirary py-5 px-4  "
              type="text"
              placeholder="name"
            />
            <input
              className="bg-tertirary py-5 px-4 "
              type="text"
              placeholder="email"
            />
            <textarea
              className="bg-tertirary py-5 px-4 "
              placeholder="message"
              cols="30"
              rows="10"
            ></textarea>
            <button className="w-fit px-7 py-4 bg-main rounded-lg max-lg:w-full">
              Send
            </button>
          </form>
        </div>
      </div>
      {openPopup && (
        <div className="w-full min-h-screen bg-main bg-opacity-30 fixed z-10 top-0 left-0   ">
          <div className="w-[30rem] h-[15rem] bg-black  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center  px-5 py-5 opacity-90 rounded-lg">
            <div
              onClick={closeHandler}
              className="cursor-pointer self-end text-[1.6rem] mb-4"
            >
              X
            </div>
            <h3 className="text-[1.7rem] font-[600] px-5">
              Your message was delivered, we will contact you
              <span className="gradientText"> as soon as possible.</span>
            </h3>
          </div>
        </div>
      )}
      {error && (
        <div
          onClick={closeHandler}
          className="w-full min-h-screen bg-black bg-opacity-40 fixed z-100000 top-0 left-0   "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[30rem] h-[15rem] bg-black  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center  px-5 py-5 opacity-100 rounded-lg"
          >
            <div
              onClick={closeHandler}
              className="cursor-pointer self-end text-[1.6rem] mb-4"
            >
              X
            </div>
            <h3 className="text-[1.7rem] font-[600] px-5">
              Something went wrong
              <span className="text-red"> please try again. </span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
