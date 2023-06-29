"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const description = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="flex  justify-center  gap-10">
        <div className="flex-[0_0_43%]  mt-20 flex flex-col gap-10 overflow-scroll h-[40rem]">
          {isLoading
            ? "Loading..."
            : data?.map((post) => {
                console.log(post);
                return (
                  <div
                    key={post._id}
                    className="flex  items-center justify-between "
                  >
                    <div>
                      <Image
                        src={post.image}
                        width={180}
                        height={220}
                        alt="es"
                      ></Image>
                    </div>
                    <h2 className="text-[1.6rem] font-[500]">{post.title}</h2>
                    <span className="text-[1.5rem] text-red justify-self-end">
                      X
                    </span>
                  </div>
                );
              })}
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
          <h1 className="text-[2rem] text-center font-[700] gradientText uppercase mb-4">
            Add new Post
          </h1>
          <input
            type="text"
            placeholder="Title:"
            className="px-3 py-5 w-[80%] mx-auto bg-tertirary"
          />
          <input
            type="text"
            placeholder="Desc:"
            className="px-3 py-5 w-[80%] mx-auto bg-tertirary"
          />
          <input
            type="text"
            placeholder="Image (URL):"
            className="px-3 py-5 w-[80%] mx-auto bg-tertirary"
          />
          <textarea
            placeholder="Content:"
            id=""
            cols="20"
            rows="10"
            className="px-3 py-3 w-[80%] mx-auto  bg-tertirary"
          ></textarea>
          <button className="bg-main w-[80%] mx-auto py-4 uppercase  font-[600] text-[1rem]">
            Send
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
