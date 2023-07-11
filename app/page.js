import OurOffer from "./components/homeLayout/OurOffer";
import Opinions from "./components/homeLayout/Opinions";
import Hero from "./components/homeLayout/Hero";
import OurProduct from "./components/homeLayout/OurProduct";
import Faq from "./components/homeLayout/Faq";
import Video from "./components/homeLayout/Video";
import Design from "./components/homeLayout/Design";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <Hero />
      <Video></Video>
      <OurProduct />
      <Design></Design>
      <OurOffer />
      <Opinions />
      <Faq />
    </div>
  );
}
