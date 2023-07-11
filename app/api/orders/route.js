import { NextResponse } from "next/server";
import Order from "@/models/Order";
import connect from "@/utils/db";

export const POST = async (request) => {
  const { cardHolderName, cardNumber, cvc, payment } = await request.json();

  await connect();

  const newOrder = new Order({
    cardHolderName,
    cardNumber,
    cvc,
    payment,
  });

  try {
    await newOrder.save();
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

    const order = await Order.find(username && { username });
    return new NextResponse(JSON.stringify(order), { status: 200 });
  } catch (err) {
    return new NextResponse("database error", { status: 500 });
  }
};
