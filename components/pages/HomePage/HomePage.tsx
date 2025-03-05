import HeroBanner from "./Banners/HeroBanner";
import PopularProducts from "./PopularProducts/PopularProducts";
import PromotionSection from "./PromotionSection/PromotionSection";

import { Tire } from "@/types/tiresTypes";

type HomePageProps = {
  tires: Tire[];
};

const HomePage = ({ tires }: HomePageProps) => {
  return (
    <section>
      <HeroBanner />
      <PromotionSection />
      <PopularProducts tires={tires} />
    </section>
  );
};

export default HomePage;
