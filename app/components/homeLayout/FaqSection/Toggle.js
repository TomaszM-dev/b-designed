"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="question"
      onClick={() => setToggle(!toggle)}
      animate={{ opacity: 1, translateY: 0 }}
      initial={{ opacity: 0, translateY: -50 }}
      exit={{ opacity: 0, translateY: -50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h4 layout>{title}</motion.h4>
      <motion.div
        layout
        className="faq-line bg-secondary h-[1px] mt-4 "
      ></motion.div>
      {toggle ? children : ""}
    </div>
  );
};

export default Toggle;
