"use client";
import React from "react";
import FaqData from "./FaqSection/FaqData";
import { motion } from "framer-motion";
import { LayoutGroup } from "framer-motion";
import Toggle from "./FaqSection/Toggle";

const Faq = () => {
  const faqData = FaqData();

  return (
    <div>
      <h1 className="text-[2.8rem] text-center font-[700] leading-[3.3rem] mb-5 w-[90%] mx-auto">
        Frequently<span className="gradientText"> Asked</span> Questions
      </h1>
      <div className="text-[1.5rem] font-[600] w-[80%] mx-auto flex flex-col gap-10 my-20">
        <LayoutGroup>
          {faqData.map((el) => {
            return (
              <Toggle title={el.title} key={el.title}>
                <motion.p
                  layout
                  animate={{ opacity: 1, translateY: 0 }}
                  initial={{ opacity: 0, translateY: -50 }}
                  exit={{ opacity: 0, translateY: -50 }}
                  transition={{ duration: 0.5 }}
                ></motion.p>
                <p className="text-[1.2rem] my-5 font-[300] ">{el.answer}</p>
              </Toggle>
            );
          })}
        </LayoutGroup>
      </div>
    </div>
  );
};

export default Faq;
