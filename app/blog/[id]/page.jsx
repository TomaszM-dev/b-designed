import React from "react";
import Image from "next/image";
import blog1 from "public/move.png";
import blog2 from "public/apps.jpg";
async function getData(id) {
  const res = await fetch(
    `http://b-designed-9exuou0v1-tomaszm-dev.vercel.app/api/posts/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);

  return {
    title: post.title,
    description: post.description,
    image: post.image,
    content: post.content,
    username: post.username,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="flex flex-col gap-20  my-20">
      <div className="flex gap-10 items-center">
        <div className="flex-1  flex flex-col gap-5">
          <h2 className="text-[2rem] font-[700] gradientText ">{data.title}</h2>
          <p>{data.description}</p>
          <div className="flex items-center gap-5 mt-5">
            <Image
              alt="es"
              src={data.image}
              width={300}
              height={300}
              className="w-10 h-10 rounded-[50%] object-cover"
            ></Image>
            <p>John Doe</p>
          </div>
        </div>
        <Image src={blog1} alt="es" className="flex-1 w-[20rem]"></Image>
      </div>
      <div className="flex flex-col gap-5 ">
        <p className=" p-5 rounded-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          inventore, labore unde explicabo architecto sit voluptatem harum.
          Nulla delectus perferendis accusamus dolor exercitationem aliquid in
          sapiente fuga cupiditate eveniet dolores asperiores laboriosam
          repellendus aspernatur tempore ipsum, aliquam labore! Expedita, illo.
        </p>
        <p className=" p-7 rounded-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ipsa sed
          explicabo recusandae optio nulla dolor accusamus fuga nihil iure.
        </p>
        <p className=" p-5 rounded-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quidem,
          impedit amet mollitia recusandae sit quae obcaecati, similique illum
          in doloribus ratione! Repudiandae quidem quam exercitationem
          doloremque voluptates est omnis cupiditate provident repellendus vero
          ab animi ut, ullam rem porro, eaque obcaecati officia, tempora soluta
          at quod explicabo consectetur necessitatibus.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
