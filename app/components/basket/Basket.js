import { useCallback, useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import nft from "public/film2.png";
import film from "public/f1.png";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Basket = ({ setBasketOpen, basketOpen, setPopup }) => {
  const [isLoadingg, setIsLoading] = useState(false);
  const [dataa, setData] = useState([{}]);
  const [totalPrice, setTotalPrice] = useState(0);
  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/products?username=${session?.data?.user.name}`,
    fetcher
  );

  console.log(data);

  useEffect(() => {
    const prices = data?.map((el) => Number(el.price));
    const totalPrices = prices?.reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
    setTotalPrice(totalPrices);
  });

  const closeHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadowClose")) {
      document.body.style.overflow = "auto";

      setBasketOpen(false);
    } else {
    }
  };

  const handleDelete = async (id) => {
    console.log(id);

    try {
      await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      onClick={closeHandler}
      className="shadowClose w-full min-h-screen bg-background bg-opacity-60 fixed z-100000 top-0 left-0   "
    >
      <div className="w-[35rem] max-md:w-full h-full bg-black  right-0 top-0 absolute  flex flex-col items-center  px-5 py-5 opacity-90 rounded-lg">
        <div
          onClick={() => setBasketOpen(false)}
          className="cursor-pointer self-end text-[1.6rem] mb-4 mr-3"
        >
          X
        </div>
        <h3 className="text-[1.7rem] font-[600] px-5 gradientText border-b-2 pb-2 border-main">
          My basket
        </h3>
        <div className="">
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <div className="mt-10 w-[100%] h-[37rem] flex flex-col gap-5 overflow-scroll  ">
              {data?.map((product) => {
                return (
                  <div className="flex gap-5 bg-tertirary rounded-lg  items-center">
                    <Image
                      src={
                        product.title === "FilmPire - netflix clone"
                          ? film
                          : nft
                      }
                      className="w-60"
                    ></Image>
                    <div className="text-[1.3rem] flex flex-col gap-1">
                      <p className="">{product.title} </p>
                      <p className="text-main">${product.price}</p>
                    </div>
                    <div
                      onClick={() => handleDelete(product._id)}
                      className="self-start px-3 py-2 text-red cursor-pointer"
                    >
                      X
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 mt-10 ">
          <p>Total Price: ${totalPrice}</p>
          <Link href="/checkout" onClick={() => setBasketOpen(false)}>
            <button className="px-7 py-3 bg-main rounded-lg ">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Basket;
