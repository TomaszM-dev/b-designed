"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  console.log(mode, toggle);

  return (
    <div
      className="flex  border-[1px] rounded-[4rem] w-[3rem] h-[1.7rem] gap-1 items-center self-center text-[1rem] relative cursor-pointer "
      onClick={toggle}
    >
      <div>🌞</div>
      <div className="">🌙</div>
      <div
        className="w-5 h-5 bg-main absolute rounded-[50%] transition-all"
        style={mode === "light" ? { left: "0px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
