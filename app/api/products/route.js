import { NextResponse } from "next/server";
import Product from "@/models/Product";
import connect from "@/utils/db";

export const POST = async (request) => {
  const { name, email, category, title, price, image } = await request.json();

  await connect();

  const newProduct = new Product({
    name,
    email,
    category,
    title,
    price,
    image,
  });

  try {
    await newProduct.save();
    return new NextResponse("Product has been landed", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse("lipton", {
      status: 500,
    });
  }
};
