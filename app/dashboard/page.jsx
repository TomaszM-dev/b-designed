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
  const {
    data: dataPosts,
    mutate: postmutate,
    error: posterror,
    isLoading: loadingPosts,
  } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);
  const {
    data: dataOrders,
    mutate,
    error,
    isLoading: loadingOrders,
  } = useSWR(`/api/orders?username=${session?.data?.user.name}`, fetcher);

  console.log(dataOrders);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="flex  justify-center  gap-10 mt-40 max-lg:flex-col max-lg:mt-20">
        <div className="flex-[0_0_43%]  mt-10 flex flex-col gap-10 overflow-scroll h-[40rem]">
          <div className=" h-[50%] p-4 rounded-md overflow-scroll">
            <h3 className=" text-center text-[1.7rem] border-b-2 border-main w-fit  mx-auto px-5  font-[600] uppercase">
              My Orders
            </h3>
            {loadingPosts
              ? "Loading..."
              : dataOrders?.map((order) => {
                  return (
                    <div
                      key={order._id}
                      className="flex   flex-col text-secondary bg-tertirary  p-5 gap-4  rounded-md  mt-5 "
                    >
                      <p>Order id: {order._id}</p>
                      <p>Total Price: {order.payment} $</p>
                      <p>Card Number: {order.cardNumber}</p>
                    </div>
                  );
                })}
          </div>
          <div className=" h-[50%] p-4 rounded-md overflow-scroll">
            <h3 className="text-center text-[1.7rem] border-b-2 border-main w-fit  mx-auto px-5  font-[600] uppercase">
              My posts
            </h3>
            {loadingPosts
              ? "Loading..."
              : dataPosts?.map((post) => {
                  console.log(post);
                  return (
                    <div
                      key={post._id}
                      className="flex  text-secondary items-center justify-between bg-tertirary p-5 rounded-md  mt-5 gap-5"
                    >
                      <div>
                        <Image
                          src={post.image}
                          width={180}
                          height={220}
                          alt="es"
                        ></Image>
                      </div>
                      <h2 className="text-[1.3rem] font-[500] ">
                        {post.title}
                      </h2>
                      <span
                        className="text-[1.2rem] text-red  cursor-pointer"
                        onClick={() => handleDelete(post._id)}
                      >
                        X
                      </span>
                    </div>
                  );
                })}
          </div>
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
