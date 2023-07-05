"use client";

import React from "react";
import Link from "next/link";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

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
  const session = useSession();

  return (
    <div className="fixed  w-[90%] top-0 left-[5%]  bg-background flex  h-20  items-center font-[600] justify-between  text-[1.2rem] border-b-[0.1rem] z-[1000]">
      <Link href="/">Lamamia</Link>
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
          <button
            onClick={signOut}
            className="rounded-md px-4 py-1 bg-main w-max text-white"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
