import React from "react";
import Image from "next/image";
import move from "public/move.png";
import slack from "public/slack.png";
import websites from "public/websites.jpg";
import streaming from "public/streaming.png";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="flex flex-col items-center gap-20 my-10">
      <h1 className="text-[4rem] uppercase gradientText font-[700]">
        Our Blog
      </h1>
      <Link href="/blog/1" className="flex gap-10 items-center">
        <Image className="flex-[0_0_40%] w-10" src={move}></Image>
        <div className="flex-1">
          <h3 className="text-[1.7rem] font-[700] mb-4 gradientText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quia.
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
            enim! Magni ullam temporibus molestiae blanditiis similique unde
            officiis in atque, saepe, libero repellendus nulla dolorum,
            doloremque eum illum sit aperiam.
          </p>
        </div>
      </Link>
      <Link href="/blog/2" className="flex gap-10 items-center">
        <Image className="flex-[0_0_40%] w-10" src={slack}></Image>
        <div className="flex-1">
          <h3 className="text-[1.7rem] font-[700] mb-4 gradientText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quia.
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
            enim! Magni ullam temporibus molestiae blanditiis similique unde
            officiis in atque, saepe, libero repellendus nulla dolorum,
            doloremque eum illum sit aperiam.
          </p>
        </div>
      </Link>
      <Link href="/blog/3" className="flex gap-10 items-center">
        <Image className="flex-[0_0_40%] w-10" src={websites}></Image>
        <div className="flex-1">
          <h3 className="text-[1.7rem] font-[700] mb-4 gradientText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quia.
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
            enim! Magni ullam temporibus molestiae blanditiis similique unde
            officiis in atque, saepe, libero repellendus nulla dolorum,
            doloremque eum illum sit aperiam.
          </p>
        </div>
      </Link>
      <Link href="/blog/4" className="flex gap-10 items-center">
        <Image className="flex-[0_0_40%] w-20 " src={streaming}></Image>
        <div className="flex-1">
          <h3 className="text-[1.7rem] font-[700] mb-4 gradientText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quia.
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
            enim! Magni ullam temporibus molestiae blanditiis similique unde
            officiis in atque, saepe, libero repellendus nulla dolorum,
            doloremque eum illum sit aperiam.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
