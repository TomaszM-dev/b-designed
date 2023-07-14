"use client";
import React from "react";
import Image from "next/image";
import chip from "public/chip.png";
import map from "public/map.png";
import visa from "public/visa.png";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const session = useSession();
  const [cardNumberS, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvcS, setCvc] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const [err, setError] = useState(false);

  const onChangeCardNumber = (e) => {
    const value = e.target.value
      .replace(/[^0-9]/gi, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    setCardNumber(value);
  };
  const onChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const onChangeMonth = (e) => {
    const value = e.target.value;
    setMonth(value);
  };
  const onChangeYear = (e) => {
    const value = e.target.value;
    setYear(value);
  };
  const onChangeCvc = (e) => {
    const value = e.target.value;
    setCvc(value);
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/products?username=${session?.data?.user.name}`,
    fetcher
  );

  useEffect(() => {
    const prices = data?.map((el) => Number(el.price));
    const totalPrices = prices?.reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
    setTotalPrice(totalPrices);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardHolderName = name;
    const cardNumber = cardNumberS;
    const cvc = cvcS;
    const payment = totalPrice;

    try {
      await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cardHolderName,
          cardNumber,
          cvc,
          payment,
          username: session.data.user.name,
        }),
      });
      mutate();

      e.target.value.reset();
    } catch (err) {}
    setOpenPopup(true);
  };

  const dashboardHandler = async () => {
    try {
      await fetch(`/api/products`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
    router?.push("/dashboard/");
  };
  const closeHandler = () => {
    setError(false);
  };

  return (
    <div className="flex w-[100%] mx-auto  h-screen  items-center gap-20 max-lg:flex-col  max-lg:my-40">
      <div className="w-[27rem] h-[17rem] bg-main text-white rounded-xl  relative z-[0] flex flex-col gap-5 shadow-sm shadow-main">
        <Image
          src={map}
          className="absolute w-full h-full z-[-1] opacity-50"
        ></Image>
        <div className="flex items-center justify-between px-6 py-10 h-[20%]">
          <Image className="  w-[3.5rem] h-[3.5rem]" src={chip}></Image>
          <Image className="  w-[6.5rem] h-[2rem]" src={visa}></Image>
        </div>
        <div className="flex justify-between px-6 ">
          <p className=" text-[1.7rem] font-[400] h-[17%] text-white">
            {cardNumberS}
          </p>
          <div className="flex flex-col">
            <p className="uppercase font-[600]">Cvc</p>
            <p>{cvcS}</p>
          </div>
        </div>
        <div className="flex justify-between px-5 mt-8 ">
          <div>
            <p className="uppercase font-[600] text-[0.8rem]">Card holder</p>
            <p className="text-[1.4rem] uppercase mt-1">{name}</p>
          </div>
          <div>
            <p className="uppercase font-[600] text-[0.8rem]">Valid Till</p>
            <p className="text-[1.4rem] uppercase mt-1">
              {month}/{year}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col max-lg:w-[70%] max-md:w-[90%]">
        <h2 className="gradientText text-[2.7rem] font-[600]">
          Payment Details{" "}
        </h2>
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-14">
          <div>
            <p className="uppercase text-[0.9rem] mb-3">Cardholder Name</p>
            <input
              required
              className="bg-background border-b-2 border-main text-[1.6rem] w-full"
              type="text"
              placeholder="🙋🏻‍♂️"
              value={name}
              onChange={onChangeName}
            />
          </div>
          <div>
            <p className="uppercase text-[0.9rem] mb-3">Card Number</p>
            <input
              required
              className="bg-background border-b-2 border-main text-[1.6rem] w-full"
              type="text"
              placeholder="💳"
              value={cardNumberS}
              maxLength="19"
              onChange={onChangeCardNumber}
            />
          </div>
          <div className="flex gap-14 items-center">
            <div>
              <p className="uppercase text-[0.9rem] mb-3">expiry month</p>
              <input
                required
                className="bg-background border-b-2 border-main text-[1.6rem] w-full"
                type="number"
                placeholder="🗓️"
                value={month}
                onChange={onChangeMonth}
              />
            </div>
            <div>
              <p className="uppercase text-[0.9rem] mb-3">expiry year</p>
              <input
                required
                className="bg-background border-b-2 border-main text-[1.6rem] w-full"
                type="number"
                placeholder="🗓️"
                value={year}
                onChange={onChangeYear}
              />
            </div>
            <div>
              <p className="uppercase text-[0.9rem] mb-3">cvc</p>
              <input
                required
                className="bg-background border-b-2 border-main text-[1.6rem] w-full"
                type="number"
                placeholder="🔒"
                value={cvcS}
                onChange={onChangeCvc}
              />
            </div>
          </div>
          <p className="text-center text-[1.6rem] mb-[-1.7rem]">
            Payment Amount: {totalPrice}$
          </p>
          <button className="uppercase px-7 py-4 bg-main rounded-lg w-[50%] mx-auto text-[1.2rem] font-[700]">
            Pay
          </button>
        </form>
      </div>
      {openPopup && (
        <div className="w-full min-h-screen bg-main bg-opacity-10 fixed z-10 top-0 left-0   ">
          <div className="w-[30rem] h-[15rem] bg-black  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center  px-5 py-8 opacity-90 rounded-lg">
            <h3 className="text-[1.4rem] font-[600] px-5">
              Your order has been placed, you will find details of it in your
              dashboard
              <span className="gradientText"> Thanks for trusting us</span>
            </h3>

            <button
              onClick={dashboardHandler}
              className="mt-10 px-7 py-3 bg-main rounded-lg"
            >
              Go back to Dashboard
            </button>
          </div>
        </div>
      )}
      {err && (
        <div className="w-full min-h-screen bg-red bg-opacity-20 fixed z-100000 top-0 left-0   ">
          <div className="w-[30rem] h-[15rem] bg-black  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center  px-5 py-5 opacity-90 rounded-lg">
            <div
              onClick={closeHandler}
              className="cursor-pointer self-end text-[1.6rem] mb-4"
            >
              X
            </div>
            <h3 className="text-[1.7rem] font-[600] px-5">
              Something went wrong
              <span className="text-red"> please try again. </span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
