import Contact from "@/models/Contact";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, message } = await request.json();

  await connect();

  const newContact = new Contact({
    name,
    email,
    message,
  });

  try {
    await newContact.save();
    return new NextResponse("Contact has been send", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
