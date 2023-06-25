import Image from "next/image";
import hero from "public/hero.png";

export default function Home() {
  return (
    <div className="flex items-center gap-[10rem]">
      <div className="flex-1 flex-col flex gap-[2rem]">
        <h1 className="text-[4.2rem]  font-[700] gradientText leading-[5rem] ">
          Better desing for your digital product
        </h1>
        <p className="text-[1.3rem]">
          Turning your idea into reality. We bring together the teams from the
          global tech industry
        </p>
        <button className="rounded-md px-7 py-4 bg-main w-max">
          See our Works
        </button>
      </div>
      <div className="flex-1 flex-col flex gap-[5rem]">
        <Image src={hero} className="w-full h-full object-cover"></Image>
      </div>
    </div>
  );
}
