import React from "react";
import Button from "@/app/components/button/Button";
import Image from "next/image";
import img4 from "public/img4.png";
import img5 from "public/img5.png";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className=" w-[85%] mx-auto flex flex-col ">
      <h1 className="text-[2rem] text-main font-[600]">{params.category}</h1>
      <div className="flex items-center  gap-20 mt-20">
        <div className="flex-1  flex flex-col gap-10 ">
          <h1 className="text-[3rem] font-[500]">Test</h1>
          <p>Desc</p>
          <Button text="See More" url="#"></Button>
        </div>
        <div className="flex-1 ">
          <Image className="object-cover w-full " src={img4}></Image>
        </div>
      </div>
      <div className="flex items-center  gap-20 my-40">
        <div className="flex-1">
          <Image src={img5}></Image>
        </div>
        <div className="flex-1  flex flex-col gap-10 text-end">
          <h1 className="text-[3rem] font-[500]">Test</h1>
          <p>Desc</p>
          <Button text="See More" url="#"></Button>
        </div>
      </div>
    </div>
  );
};

export default Category;
