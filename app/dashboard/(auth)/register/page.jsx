"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="flex flex-col items-center max-sm:mt-24 max-lg:w-[70%] max-md:w-[90%] max-sm:w-[100%] w-[50%] p-4 mx-auto rounded-lg mt-40">
      <form
        className="flex flex-col  py-10 px-4 gap-4 w-full max-sm:w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="p-5 bg-tertirary w-full rounded-md"
          placeholder="Email"
          required
        />
        <input
          type="text"
          className="p-5 bg-tertirary w-full  max-sm:mx-auto"
          placeholder="Username"
          required
        />
        <input
          type="password"
          className="p-5 bg-tertirary w-full rounded-md"
          placeholder="Password"
          required
        />
        <button className="px-6 py-4  font-[700] bg-main uppercase text-white rounded-md">
          Register
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
          href="/dashboard/login "
          className="text-center py-5 bg-tertirary  uppercase font-semibold shadow-sm  w-full rounded-md"
        >
          Login In to existing account
        </Link>
      </div>
    </div>
  );
  // return (
  //   <div className="flex flex-col items-center border-[4px]  max-sm:w-full border-tertirary max-w-fit p-10 mx-auto rounded-lg mt-40 ">
  //     <form
  //       className="flex flex-col  py-10 px-4 gap-10 w-96"
  //       onSubmit={handleSubmit}
  //     >
  //       <input
  //         type="text"
  //         className="p-4 bg-tertirary w-full max-sm:w-[90%] max-sm:mx-auto"
  //         placeholder="username"
  //         required
  //       />
  //       <input
  //         type="text"
  //         className="p-4 bg-tertirary w-full max-sm:w-[90%] max-sm:mx-auto"
  //         placeholder="email"
  //         required
  //       />
  //       <input
  //         type="password"
  //         className="p-4 bg-tertirary w-full max-sm:w-[90%] max-sm:mx-auto"
  //         placeholder="password"
  //         required
  //       />
  //       <button className="px-6 py-4  font-[700] bg-main uppercase text-white max-sm:w-[90%] max-sm:mx-auto">
  //         Register
  //       </button>
  //     </form>

  //     {err && "Something went wrong"}
  //     <Link href="/dashboard/login" className="border-b-2 pb-2">
  //       Login with an existing account
  //     </Link>
  //   </div>
  // );
};

export default Register;
