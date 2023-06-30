import React from "react";
import Image from "next/image";

import Link from "next/link";

async function getData() {
  const res = await fetch(
    "http://b-designed-9exuou0v1-tomaszm-dev.vercel.app/api/posts",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  console.log(data);

  return (
    <div className="flex flex-col items-center gap-20 my-10">
      <h1 className="text-[4rem] uppercase gradientText font-[700]">
        Our Blog
      </h1>
      {data?.map((el) => {
        return (
          <Link
            href={`blog/${el._id}`}
            className="flex gap-10 items-center"
            key={el.id}
          >
            <Image
              className="flex-[0_0_40%] w-full h-full"
              src={el.image}
              alt="esssa"
              height={400}
              width={300}
            ></Image>
            <div className="flex-1">
              <h3 className="text-[1.7rem] font-[700] mb-4 gradientText">
                {el.title}
              </h3>
              <p>{el.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
