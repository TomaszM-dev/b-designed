"use client";

import React, { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import Basket from "../basket/Basket";

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
import useSWR from "swr";

const Navbar = () => {
  const [basketOpen, setBasketOpen] = useState(false);
  const session = useSession();
  const [activeBar, setActiveBar] = useState(false);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/products?username=${session?.data?.user.name}`,
    fetcher
  );

  const basketHandler = () => {
    setBasketOpen(true);
  };

  return (
    <div className=" fixed  w-[100%] top-0 left-[0%] px-20 max-md:px-6 text-secondary  bg-background flex  h-20  items-center font-[600] justify-between  text-[1.2rem] border-b-[0.1rem] z-[1000] ">
      <Link href="/">B-designed</Link>
      <div className="flex gap-10 ">
        <DarkModeToggle></DarkModeToggle>
        {links.map((el) => {
          return (
            <Link
              key={el.id}
              href={el.url}
              className="self-center max-lg:hidden"
            >
              {el.title}
            </Link>
          );
        })}

        <div className="max-lg:block hidden self-center">
          <button onClick={() => setActiveBar(!activeBar)}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-[1.7rem] "
            ></FontAwesomeIcon>
          </button>
        </div>
        {session.status === "authenticated" && (
          <div className="flex gap-10">
            <div
              onClick={basketHandler}
              className="self-center flex gap-1 items-center cursor-pointer"
            >
              <FontAwesomeIcon icon={faCartShopping} className="" />
              <p className=" text-[1rem] mb-4">{data?.length}</p>
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
        <Basket basketOpen={basketOpen} setBasketOpen={setBasketOpen} />
      )}
      {activeBar && (
        <div className="w-full min-h-screen bg-black   fixed z-10 top-0 left-0  ">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center  px-5 py-5 opacity-90 rounded-lg">
            {links.map((el) => {
              return (
                <Link
                  onClick={() => setActiveBar(!activeBar)}
                  key={el.id}
                  href={el.url}
                  className=" text-[3rem] p-3 hover:text-main"
                >
                  {el.title}
                </Link>
              );
            })}
          </div>
          <div
            onClick={() => setActiveBar(!activeBar)}
            className="absolute right-0 px-20  py-10 text-[2rem] cursor-pointer"
          >
            X
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
