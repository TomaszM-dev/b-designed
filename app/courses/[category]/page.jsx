"use client";
import React from "react";
import Button from "@/app/components/button/Button";
import Image from "next/image";
import img4 from "public/img4.png";
import img5 from "public/img5.png";
import coursesData from "@/data/coursesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAtom,
  faGraduationCap,
  faLocationCrosshairs,
  faFileContract,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import film from "public/f1.png";
import Opinions from "@/app/components/homeLayout/Opinions";
import Link from "next/link";
import Faq from "@/app/components/homeLayout/Faq";

const Category = ({ params }) => {
  const data = coursesData();

  const current = data.filter((el) => el.category === params.category);

  return (
    <div className="  mx-auto flex flex-col items-center gap-20 mt-[5rem]">
      <div className=" flex flex-col items-center gap-9 mt-20">
        <p className="uppercase gradientText font-[700] text-[1.2rem]">
          {current[0].title}
        </p>
        <h1 className="text-[3.5rem] font-[700] text-center leading-[3.9rem]">
          {current[0].headline}
          <span className="gradientText"> {current[0].headlineG}</span>
        </h1>
        <h4 className="text-[1.4rem] w-[70%] text-center text-secondarytext mt-[-0.7rem]">
          Climb out of tutorial hell and build an interactive movie app that
          will amaze recruiters
        </h4>
        <Link href={`#buynow`}>
          <button className="bg-main px-9 py-3 rounded-lg mt-3">Buy Now</button>
        </Link>
        <div className="flex gap-5 mt-[-1rem]">
          <div className="text-gold">
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </div>
          <p>{current[0].reviews}</p>
        </div>
        <Image alt="#" src={current[0].image} className="w-full h-full"></Image>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 pr-7 w-[95%]">
          <div className="w-[20%] h-[7px] rounded-2xl mb-[-1.4rem] bg-main"></div>
          <h2 className="text-[2.8rem] font-[700] leading-[3.3rem] ">
            The Fast-Track to <span className="gradientText">Web Design</span>
          </h2>
          <p className="text-[1.3rem] text-secondarytext">
            Filmpire was created for JavaScript developers who want to learn
            React.js in the fastest time possible.
          </p>
          <p className="text-[1.3rem] text-secondarytext">
            Break free from learning theory will you forget the next day and
            acquire the skills you need to build any React application in this
            8-hour course.
          </p>
          <p className="text-[1.3rem] text-secondarytext">
            Filmpire is led by Adrian Hajdin, founder of JavaScript Mastery,
            appraised YouTube educator, and recognised as one out of only 100
            GitHub Stars in the world ⭐️
          </p>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-10 pt-20 flex-1">
            <div className="p-10 bg-tertirary rounded-3xl  gap-5 flex flex-col">
              <FontAwesomeIcon
                className="w-8 p-4 text-[1.8rem] bg-main rounded-[50%]"
                icon={faAtom}
              />
              <h4 className="text-[1.3rem] font-[700]">Master React.js</h4>
              <p className="text-secondarytext">
                Learn the art of building dynamic user interfaces with the most
                popular library in the world
              </p>
            </div>
            <div className="p-10 bg-tertirary rounded-3xl  gap-5 flex flex-col ">
              <FontAwesomeIcon
                className="w-8 p-4 text-[1.8rem] bg-main rounded-[50%]"
                icon={faGraduationCap}
              />
              <h4 className="text-[1.3rem] font-[700]">Graduate with degree</h4>
              <p className="text-secondarytext">
                Write and manage complex applications.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 flex-1">
            <div className="p-10 bg-tertirary rounded-3xl  gap-5 flex flex-col">
              <FontAwesomeIcon
                className="w-8 p-4 text-[1.8rem] bg-main rounded-[50%]"
                icon={faLocationCrosshairs}
              />
              <h4 className="text-[1.3rem] font-[700]">Get a remote Job</h4>
              <p className="text-secondarytext">
                Get a well paid job and work from your own hause remotely.
              </p>
            </div>
            <div className="p-10 bg-tertirary rounded-3xl  gap-5 flex flex-col">
              <FontAwesomeIcon
                className="w-8 p-4 text-[1.8rem] bg-main rounded-[50%]"
                icon={faFileContract}
              />
              <h4 className="text-[1.3rem] font-[700]">Apply File UI</h4>
              <p className="text-secondarytext">
                Import and utilize powerful components to create modern user
                interfaces with React
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[90%] mt-20 gap-7">
        <h1 className="text-[3rem] font-[700] text-center leading-[3.9rem] mb-10">
          🚀 Leverage
          <span className="gradientText"> Hands-On Learning </span>
          to Skyrocket Your New or Existing Dev Career
        </h1>
        <p className="text-[2.3rem] font-[600]">Key focus points</p>
        <p className="text-[1.4rem] text-secondarytext">
          When you join Filmpire, you'll develop the skills, strategies, and
          techniques that are not taught in many theory-based counterparts,
          including:
        </p>
        <ul className="flex flex-col gap-9 pl-3 mt-5">
          <li className="flex gap-3 text-[1.2rem] font-[600] items-center">
            <span className="text-main text-[1.4rem]">✔</span>
            <p>
              How to set up a project environment and build the project
              architecture
            </p>
          </li>
          <li className="flex gap-3 text-[1.2rem] font-[600] items-center">
            <span className="text-main text-[1.4rem]">✔</span>
            <p>
              How to get unstuck, solve errors, and prevent future bugs from
              occurring
            </p>
          </li>
          <li className="flex gap-3 text-[1.2rem] font-[600] items-center">
            <span className="text-main text-[1.4rem]">✔</span>
            <p>
              How to use Material UI to create stunning, Google-like user
              experiences
            </p>
          </li>
          <li className="flex gap-3 text-[1.2rem] font-[600] items-center">
            <span className="text-main text-[1.4rem]">✔</span>
            <p>
              How to get unstuck, solve errors, and prevent future bugs from
              occurring
            </p>
          </li>
          <li className="flex gap-3 text-[1.2rem] font-[600] items-center">
            <span className="text-main text-[1.4rem]">✔</span>
            <p>
              How to optimize your code for advanced functionality and clarity
            </p>
          </li>
        </ul>
      </div>
      <Opinions />
      <div className="w-full">
        <Faq />
      </div>
      <div
        id="buynow"
        className="w-[70%] bg-tertirary  shadow-lg rounded-lg flex flex-col gap-8 p-10 mt-[-2rem] my-20"
      >
        <h1 className="text-[2.2rem] font-[700] text-center leading-[2.6rem] ">
          🚀 Leverage
          <span className="gradientText"> Hands-On Learning </span>
          to Skyrocket Now
        </h1>
        <p className="uppercase text-main font-[700] text-[1.4rem] ">
          Special discount for you
        </p>
        <div className="flex gap-3 items-end mt-[-1rem] ">
          <h3 className="text-[3.4rem] h-fit font-[700] ">
            {current[0].price}{" "}
          </h3>
          <div className="text-[2rem] h-fit mb-2 font-[700]  text-secondarytext relative">
            <span>{current[0].priceCrossed}</span>
            <div className="w-[100%] h-1 bg-secondarytext z-10 absolute top-[44%] "></div>
          </div>
        </div>
        <ul className="flex flex-col gap-9 ">
          <li className="flex gap-3 text-[1.2rem] font-[600] items-center">
            <span className="text-main text-[1.4rem]">✔</span>
            <p>
              How to set up a project environment and build the project
              architecture
            </p>
          </li>
          <li className="flex gap-3 text-[1.2rem] font-[600] items-center">
            <span className="text-main text-[1.4rem]">✔</span>
            <p>
              How to get unstuck, solve errors, and prevent future bugs from
              occurring
            </p>
          </li>
          <li className="flex gap-3 text-[1.2rem] font-[600] items-center">
            <span className="text-main text-[1.4rem]">✔</span>
            <p>
              How to use Material UI to create stunning, Google-like user
              experiences
            </p>
          </li>
        </ul>
        <button className="px-7 py-4 mt-4 text-[1.5rem] font-[700] bg-main rounded-xl shadow-xl">
          {current[0].buy}
        </button>
      </div>
    </div>
  );
};

export default Category;
