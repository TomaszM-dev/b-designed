import React from "react";
import Link from "next/link";
import Image from "next/image";
import work1 from "public/illustration.png";
import work2 from "public/websites.jpg";
import work3 from "public/apps.jpg";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-[2.3rem] font-[600]">Choose a gallery</h1>
      <div className="flex justify-start items-center w-[85%] mt-5 gap-10 text-white ">
        <Link
          href="/portfolio/illustrations"
          className="bg-main flex-1 h-[25rem] border-4 rounded-md relative flex overflow-hidden hover:text-main transition-all duration-1000 "
        >
          <Image
            className="w-full h-full object-cover absolute hover:scale-125 transition-all duration-1000 "
            src={work1}
          ></Image>
          <span className="z-10 relative text-[2.3rem] font-[600] self-end w-full text-end px-3 ">
            Ilustrations
          </span>
        </Link>
        <Link
          href="/portfolio/websites"
          className="bg-main flex-1 h-[25rem] border-4  rounded-md relative flex overflow-hidden hover:text-main transition-all duration-1000 "
        >
          <Image
            className="w-full h-full object-cover absolute hover:scale-125 transition-all duration-1000"
            src={work2}
          ></Image>
          <span className="z-10 relative text-[2.3rem] font-[600] self-end w-full text-end px-3">
            Websites
          </span>
        </Link>{" "}
        <Link
          href="/portfolio/illustrations"
          className="bg-main flex-1 h-[25rem] border-4 rounded-md relative flex  hover:text-main transition-all duration-1000 overflow-hidden"
        >
          <Image
            className="w-full h-full object-cover object-left absolute hover:scale-125 transition-all duration-1000"
            src={work3}
          ></Image>
          <span className="z-10 relative text-[2.3rem] font-[600] self-end w-full text-end px-3">
            Applications
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
