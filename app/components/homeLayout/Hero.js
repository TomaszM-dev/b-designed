import React from "react";
import hero from "public/hero.png";
import Button from "../button/Button";
import img from "public/move.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import film from "public/f1.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-[8rem]">
      <div className="flex items-center gap-[10rem] ">
        <div className="flex-1 flex-col flex gap-[2rem]">
          <h1 className="text-[4.2rem]  font-[700] gradientText leading-[5rem] ">
            Better desing for your digital product
          </h1>
          <p className="text-[1.3rem]">
            Turning your idea into reality. We bring together the teams from the
            global tech industry
          </p>
          <Button url="/courses" text="See our Works"></Button>
        </div>
        <div className="flex-1 flex-col flex gap-[5rem] ">
          <Image
            src={hero}
            className="w-full h-full object-cover  animate-[move_3s_ease_infinite]"
          ></Image>
        </div>
      </div>
      <div className="mt-40 flex flex-col gap-3">
        <h2 className="text-[3.4rem] text-center font-[700]">
          Welcome to <span className="gradientText">B-designed </span>
        </h2>
        <p className="text-center w-[79%] mx-auto font-[500] text-[1.2rem]">
          Hands-on projects are the most practical way to learn a programming
          language and build your portfolio. If you're tired of building "to-do"
          apps and learning theory, JS Mastery Pro can help you solidify your
          knowledge and start taking on meaningful projects that will set the
          tone for your career.
        </p>
        <div className="mt-10 w-[80%] mx-auto relative rounded-3xl overflow-hidden ">
          <Image
            src={film}
            className="w-full h-[32rem]  object-cover mx-auto mt-10 "
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
