import React from "react";
import Image from "next/image";
import card1 from "public/move.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import card2 from "public/streaming.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const OurProduct = () => {
  return (
    <div>
      <div className="flex flex-col gap-[1rem]  w-[95%] mx-auto items-center mt-[7rem]">
        <h1 className="text-[2.8rem] text-center font-[700] leading-[3.3rem] mb-5">
          Comprehensive <span className="gradientText">Project-Based</span>{" "}
          Courses to Help You Become a{" "}
          <span className="gradientText">best designer in the world</span>
        </h1>
        <p className="text-[1.1rem] font-[600] text-center w-[90%] mx-auto text-secondarytext">
          Want to master Figma or create a stunning Web 3.0 blockchain app? Join
          other professional developers inside Filmpire where you'll build a
          Netflix clone streaming app or NFT Marketplace where you'll develop
          Cryptoket, a fully-functioning NFT platform.
        </p>
        <div className="flex items-center  gap-20 w-[90%] mt-6">
          <div className="flex-1  relative group/item ">
            <div className="w-full h-[29rem] relative bg-tertirary flex  flex-col rounded-2xl ">
              <Image
                className="  rounded-2xl w-full h-[55%] grayFilter  object-cover "
                src={card1}
              ></Image>

              <div className="absolute bottom-0  flex flex-col gap-7 items-center justify-center  transition-all  p-10 h-[45%] text-secondary ">
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
              </div>
            </div>
          </div>
          <div className="flex-1  ">
            <div className="w-full h-[29rem] relative bg-tertirary flex  flex-col rounded-2xl ">
              <Image
                className="  rounded-2xl w-full h-[55%] grayFilter  object-cover"
                src={card2}
              ></Image>

              <div className="flex flex-col gap-7 items-center justify-center p-10 text-secondary">
                <h2 className="text-[1.3rem] font-[700] text-secondary">
                  {" "}
                  Build an interesting{" "}
                  <span className="gradientText">website design</span> with our
                  course{" "}
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
                  <p className="pl-4">4.7/5, based on 37 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[3px] w-[75%] h-[35rem] mx-auto border-main mt-20 relative flex flex-col gap-10 items-center justify-center ">
        <div className="p-4 border-2 border-main absolute top-[-1rem] left-[-1rem] bg-background "></div>
        <div className="p-4 border-2 border-main absolute top-[45%] left-[-1.3rem] bg-background "></div>
        <div className="p-4 border-2 border-main absolute bottom-[-1rem] left-[-1.3rem] bg-background "></div>
        <div className="p-4 border-2 border-main absolute bottom-[-1rem] right-[-1.3rem] bg-background "></div>
        <div className="p-4 border-2 border-main absolute top-[45%] right-[-1.3rem] bg-background "></div>
        <div className="p-4 border-2 border-main absolute top-[-1rem] right-[-1.3rem] bg-background "></div>
        <p className="text-secondarytext uppercase font-[600]">
          Learn how to create beautifull design
        </p>
        <h2 className="gradientText text-[3.6rem] font-[700] text-center leading-[3.3rem]">
          The B-designed masterclass experience
        </h2>
        <p className="w-[70%] text-center text-[1.2rem] font-[500]">
          Showcase your expertise to employers with exciting projects where
          you'll build real-world applications and have your code reviewed by
          industry experts.
        </p>
        <p className="w-[70%] text-center text-[1.2rem] font-[500]">
          Learn how to position yourself for a rewarding career with weekly live
          Q&As, mock interviews
        </p>
        <button className="px-10 py-3">Learn more →</button>
      </div>
    </div>
  );
};

export default OurProduct;
