import React from "react";
import Image from "next/image";
import social1 from "public/1.png";
import social2 from "public/2.png";
import social3 from "public/3.png";
import social4 from "public/4.png";

const Footer = () => {
  return (
    <div className="flex h-[5rem] items-center justify-between">
      <div>@2023 all rights are reserved</div>
      <div className="flex items-center gap-[1rem]">
        <Image
          className="cursor-pointer"
          src={social1}
          width={30}
          height={30}
          alt=""
        ></Image>
        <Image
          className="cursor-pointer"
          src={social2}
          width={30}
          height={30}
          alt=""
        ></Image>
        <Image
          className="cursor-pointer"
          src={social3}
          width={30}
          height={30}
          alt=""
        ></Image>
        <Image
          className="cursor-pointer"
          src={social4}
          width={30}
          height={30}
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default Footer;
