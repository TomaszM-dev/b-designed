import React from "react";
import filmpire from "public/f1.png";
import nft from "public/film2.png";

const coursesData = () => {
  return [
    {
      category: "filmpire",
      title: "FilmPire - netflix clone",
      headline: "Master Design in an 7-hour",
      headlineG: "mainly practical course",
      reviews: "4.7/5, based on 97 reviews",
      image: filmpire,
      price: "$85",
      priceCrossed: "$165",
      buy: "Get Filmpire and master Web Design",
    },
    {
      category: "nft-marketplace",
      title: "Nft Marketplace - binance clone ",
      headline: "Become a Web3.0 Pioneer by NFT Marketplace App",
      headlineG: "Building an Advanced",
      reviews: "4.3/5, based on 47 reviews",
      image: nft,
      price: "$46",
      priceCrossed: "$120",
      buy: "Get Nft Market and become Expert",
    },
  ];
};

export default coursesData;
