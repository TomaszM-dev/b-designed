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
    <div className="flex flex-col items-center  max-lg:w-[70%] max-md:w-[90%] max-sm:w-[100%] w-[50%]   p-4 mx-auto rounded-lg mt-40">
      <form
        className="flex flex-col  py-10 px-4 gap-6 w-full max-sm:w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="p-5 bg-tertirary w-full rounded-md"
          placeholder="TESTING: admin@gmail.com"
          required
        />
        <input
          type="password"
          className="p-5 bg-tertirary w-full rounded-md"
          placeholder="TESTING: admin"
          required
        />
        <button className="px-6 py-4  font-[700] bg-main uppercase text-white rounded-md">
          Login
        </button>
      </form>
      <div className="flex w-full items-center gap-7 mb-10">
        <span className="w-full bg-white h-[1px]"></span>
        <span>OR</span>
        <span className="w-full bg-white h-[1px]"></span>
      </div>
      <div className="flex flex-col w-full justify-center gap-3 items-center">
        <button
          onClick={() => signIn("google")}
          className=" bg-tertirary uppercase py-5 rounded-md  font-semibold shadow-sm  w-full"
        >
          continue with google
        </button>
        <Link
          href="/dashboard/register "
          className="text-center py-5 bg-tertirary  uppercase font-semibold shadow-sm  w-full rounded-md"
        >
          Register an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
