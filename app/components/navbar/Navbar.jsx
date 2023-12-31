"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { BiLogIn } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

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
import { usePathname } from "next/navigation";

const Navbar = ({ popup, setPopup }) => {
  const [basketOpen, setBasketOpen] = useState(false);
  const session = useSession();
  const [activeBar, setActiveBar] = useState(false);
  const pathname = usePathname();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/products?username=${session?.data?.user.name}`,
    fetcher
  );
  const [item, setItem] = useState(data);

  const basketHandler = () => {
    setBasketOpen(true);
    console.log(item);
  };

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={` fixed  w-[100%] top-0 left-[0%] px-20 max-md:px-6 text-secondary  bg-background flex    items-center font-[600] justify-between text-[1.2rem] py-8 z-[1000] transition-all duration-100  border-main ${
        sticky ? "border-b-[2px] border-b-main " : ""
      }`}
    >
      <Link href="/" className="gradientText text-[1.5rem]">
        B-designed
      </Link>
      <div className="flex gap-6  ">
        {links.map((el) => {
          return (
            <Link
              key={el.id}
              href={el.url}
              className={`self-center max-lg:hidden ${
                pathname === el.url ? "gradientText" : ""
              }`}
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
          <div className="flex gap-4 items-center">
            <div
              onClick={basketHandler}
              className="self-center flex gap-1 items-center cursor-pointer"
            >
              <FontAwesomeIcon icon={faCartShopping} className="" />
              <p className=" text-[1rem] mb-4">{data?.length}</p>
            </div>
            <button
              onClick={signOut}
              className="max-sm:hidden rounded-md px-4 py-1 bg-main w-max text-white"
            >
              Logout
            </button>
            <button
              onClick={signOut}
              className="md:hidden rounded-md   text-3xl w-max text-white"
            >
              <BiLogIn />
            </button>
          </div>
        )}
      </div>
      <AnimatePresence>
        {basketOpen && (
          <Basket basketOpen={basketOpen} setBasketOpen={setBasketOpen} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeBar && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            exit={{ opacity: 0, x: 100 }}
            className="w-full min-h-screen bg-background   fixed z-10 top-0 left-0  "
          >
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center  px-5 py-5 opacity-90 rounded-lg">
              {links.map((el) => {
                return (
                  <Link
                    onClick={() => setActiveBar(!activeBar)}
                    key={el.id}
                    href={el.url}
                    className={` max-sm:text-[1.8rem] text-[2.3rem] p-3 hover:text-main 
                  ${pathname === el.url ? "gradientText" : ""}
                  `}
                  >
                    {el.title}
                  </Link>
                );
              })}
            </div>
            <div
              onClick={() => setActiveBar(!activeBar)}
              className="absolute right-0 px-20 max-sm:px-10 py-10 text-[1.8rem] cursor-pointer"
            >
              X
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
