import Image from "next/image";
import ProductInfoCard from "./ProductInfoCard";

import { Tire } from "@/types/tiresTypes";

import style from "./ProductPage.module.css";

type ProductPageProps = {
  tire: Tire;
};

const ProductPage = ({ tire }: ProductPageProps) => {
  return (
    <section className={style.productPageContainer}>
      <div>
        <Image
          src={tire.image ?? ""}
          alt={tire.brand ?? ""}
          width={430}
          height={430}
        />
      </div>
      <ProductInfoCard
        brand={tire.brand}
        size={tire.size}
        price={tire.price}
        season={tire.season}
      />
    </section>
  );
};

export default ProductPage;
