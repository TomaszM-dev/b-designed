"use client";

import React, { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import img1 from "public/";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Courses",
    url: "/courses",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },

  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const [basketOpen, setBasketOpen] = useState(false);
  const session = useSession();
  const basketHandler = () => {
    setBasketOpen(true);
  };

  return (
    <div className="fixed  w-[90%] top-0 left-[5%]  bg-background flex  h-20  items-center font-[600] justify-between  text-[1.2rem] border-b-[0.1rem] z-[1000]">
      <Link href="/">B-designed</Link>
      <div className="flex gap-10 ">
        <DarkModeToggle></DarkModeToggle>
        {links.map((el) => {
          return (
            <Link key={el.id} href={el.url} className="self-center">
              {el.title}
            </Link>
          );
        })}
        {session.status === "authenticated" && (
          <div className="flex gap-10">
            <div
              onClick={basketHandler}
              className="self-center flex gap-1 items-center"
            >
              <FontAwesomeIcon icon={faCartShopping} className="" />
              <p className=" text-[1rem] mb-4">0</p>
            </div>
            <button
              onClick={signOut}
              className="rounded-md px-4 py-1 bg-main w-max text-white"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      {basketOpen && (
        <div className="w-full min-h-screen bg-background bg-opacity-60 fixed z-100000 top-0 left-0   ">
          <div className="w-[30rem] h-full bg-black right-0 top-0 absolute  flex flex-col items-center  px-5 py-5 opacity-90 rounded-lg">
            <div className="cursor-pointer self-end text-[1.6rem] mb-4 mr-3">
              X
            </div>
            <h3 className="text-[1.7rem] font-[600] px-5 gradientText border-b-2 pb-2 border-main">
              Your basket
            </h3>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
