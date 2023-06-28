"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  //     if (!res.ok) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log(data);

  return <div></div>;
};

export default Dashboard;
