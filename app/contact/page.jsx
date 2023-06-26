import React from "react";
import Image from "next/image";
import contact from "public/contact.png";
import Button from "../components/button/Button";

const Contact = () => {
  return (
    <div>
      <h1 className="text-[3.4rem] font-[700] text-center mb-[3.4rem] gradientText ">
        Lets keep in touch
      </h1>
      <div className="flex gap-20 items-center">
        <div className="flex-1">
          <Image
            src={contact}
            className=" animate-[move_3s_ease_infinite]"
          ></Image>
        </div>
        <form action="" className="flex-1 flex flex-col gap-5 font-[600]">
          <input
            className="bg-tertirary py-5 px-4  "
            type="text"
            placeholder="name"
          />
          <input
            className="bg-tertirary py-5 px-4 "
            type="text"
            placeholder="email"
          />
          <textarea
            className="bg-tertirary py-5 px-4 "
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send"></Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
