import Image from "next/image";
import hero from "public/hero.png";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Better desing for your digital product</h1>
      </div>
      <div></div>
      <Image src={hero}></Image>
    </div>
  );
}
