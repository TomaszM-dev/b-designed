import React from "react";
import Image from "next/image";
import blog1 from "public/move.png";
import blog2 from "public/apps.jpg";

async function getData(id) {
  const res = await fetch(`https://b-designed.vercel.app/api/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className="flex flex-col gap-5  mt-40">
      <h1 className="text-[3rem] max-sm:text-[2.4rem] text-center font-[700] leading-[3.3rem] mb-5 w-[90%] mx-auto">
        {data.title}
        <span className="gradientText"> and enjoy coding</span>
      </h1>
      <div className="flex max-md:flex-col max-md:text-center max-md:gap-5 justify-between w-[70%] mx-auto text-[1.2rem] text-secondarytext font-[500] mb-5">
        <p>B-designed</p>
        <p>Productivity resources</p>
        <p>User : {data.username}</p>
      </div>
      <Image
        src={data.image}
        width={1000}
        height={500}
        className="mx-auto rounded-2xl  max-sm:h-[20rem] max-sm:object-cover"
      ></Image>
      <div className="w-[80%] mx-auto my-10">
        <p className="text-[1.4rem] text-secondarytext text-center ">
          {data.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
