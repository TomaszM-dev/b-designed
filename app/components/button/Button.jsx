import React from "react";
import Link from "next/link";
const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="rounded-md px-7 py-4 bg-main w-max text-white">
        {text}
      </button>
    </Link>
  );
};

export default Button;
