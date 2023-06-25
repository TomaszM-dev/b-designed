import React from "react";
import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
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
  return (
    <div className="flex w-full h-20 items-center font-[800] justify-between  ">
      <Link href="/">Lamamia</Link>
      <div className="flex gap-10 ">
        {links.map((el) => {
          console.log(el);
          return (
            <Link key={el.id} href={el.url} className="self-center">
              {el.title}
            </Link>
          );
        })}
        <button className="rounded-md px-4 py-1 bg-main w-max">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
