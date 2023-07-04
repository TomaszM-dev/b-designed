import OurOffer from "./components/homeLayout/OurOffer";
import Opinions from "./components/homeLayout/Opinions";
import Hero from "./components/homeLayout/Hero";
import OurProduct from "./components/homeLayout/OurProduct";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <Hero />
      <OurProduct />
      <OurOffer />
      <Opinions></Opinions>
    </div>
  );
}
