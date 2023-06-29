"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className="flex flex-col items-center border-[4px] border-tertirary max-w-fit p-4 mx-auto rounded-lg">
      <form
        className="flex flex-col  py-10 px-4 gap-8 w-96"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="p-5 bg-tertirary w-full"
          placeholder="email"
          required
        />
        <input
          type="password"
          className="p-5 bg-tertirary w-full"
          placeholder="password"
          required
        />
        <button className="px-6 py-4  font-[700] bg-main uppercase text-white">
          Login
        </button>
      </form>
      <button onClick={() => signIn("google")} className="border-b-2 pb-2">
        Login With Google
      </button>
    </div>
  );
};

export default Login;
