import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Product from "@/models/Product";

export const DELETE = async (request, { params }) => {
  //fetch

  const { id } = params;
  console.log(params);
  try {
    await connect();

    await Product.findByIdAndDelete(id);

    return new NextResponse("product has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("database error", { status: 500 });
  }
};
