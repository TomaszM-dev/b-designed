"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  console.log(session);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className="flex flex-col items-center border-[4px] border-tertirary max-w-fit p-4 mx-auto rounded-lg mt-60">
      <form
        className="flex flex-col  py-10 px-4 gap-8 w-96 max-sm:w-full"
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
      <div className="flex gap-10">
        <button onClick={() => signIn("google")} className="border-b-2 pb-2">
          Login With Google
        </button>
        <Link href="/dashboard/register " className="border-b-2 pb-2">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
