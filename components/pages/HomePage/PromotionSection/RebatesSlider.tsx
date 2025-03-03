import { REBATES_SLIDER_ITEMS } from "@/lib/constants/rebatesSliderItems";

import RebatesSliderItem from "./RebatesSliderItem";
import Carousel from "@/components/common/Carousel";

import style from "../HomePage.module.css";

const RebatesSlider = () => {
  return (
    <div className={style.rebatesSliderContainer}>
      <h1>Save with Rebates and Promotions</h1>
      <Carousel>
        {REBATES_SLIDER_ITEMS.map((item) => (
          <RebatesSliderItem key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default RebatesSlider;
