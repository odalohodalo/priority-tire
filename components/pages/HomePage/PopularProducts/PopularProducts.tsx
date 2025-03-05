import Carousel from "@/components/common/Carousel";
import PopularProductItem from "./PopularProductItem";
import { Tire } from "@/types/tiresTypes";

import style from "../HomePage.module.css";

type PopularProductsProps = {
  tires: Tire[];
};

const PopularProducts = ({ tires }: PopularProductsProps) => {
  return (
    <div className={style.popularProductsContainer}>
      <h1>Popular Products</h1>
      <Carousel>
        {tires.map((tire) => (
          <PopularProductItem key={tire.id} tire={tire} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularProducts;
