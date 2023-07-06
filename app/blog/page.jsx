import React from "react";
import Image from "next/image";

import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className="flex flex-col items-center gap-20 mt-40">
      <h1 className="text-[2.6rem] text-center font-[700] leading-[3.3rem] mb-5 w-[90%] mx-auto">
        Our blog is filled with lots of interesting content that our
        <span className="gradientText"> Global Students have created</span>
      </h1>
      {data?.map((el) => {
        return (
          <Link
            href={`blog/${el._id}`}
            className="flex gap-5 items-center bg-tertirary w-full overflow-hidden rounded-lg"
            key={el.id}
          >
            <Image
              className="flex-[0_0_30%] p-5"
              src={el.image}
              alt="esssa"
              height={200}
              width={400}
            ></Image>
            <div className="flex-1 p-5 flex flex-col gap-5">
              <h3 className="text-[1.7rem] font-[700]  gradientText">
                {el.title}
              </h3>
              <p className="text-[1.2rem] font-[500] text-secondarytext ">
                {el.desc}
              </p>
              <p className="font-[700] text-[1.2rem] ">
                Creator: {el.username}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
