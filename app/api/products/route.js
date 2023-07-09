import { NextResponse } from "next/server";
import Product from "@/models/Product";
import connect from "@/utils/db";

export const POST = async (request) => {
  const { id, username, mail, category, title, price, image } =
    await request.json();

  await connect();

  const newProduct = new Product({
    id,
    username,
    mail,
    category,
    title,
    price,
    image,
  });

  console.log(newProduct);
  try {
    await newProduct.save();
    return new NextResponse("Product has been landed", {
      status: 201,
    });
  } catch (e) {
    console.log(e);
  }
};

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  try {
    await connect();

    const product = await Product.find(username && { username });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    return new NextResponse("database error", { status: 500 });
  }
};
