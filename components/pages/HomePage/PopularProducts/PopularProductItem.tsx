import { useRouter } from "next/router";

import CardComponent from "@/components/common/CardComponent";

import { Tire } from "@/types/tiresTypes";

type PopularProductItemProps = {
  tire: Tire;
};

const PopularProductItem = ({ tire }: PopularProductItemProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/tires/${tire.id}`);
  };

  return (
    <div onClick={handleCardClick}>
      <CardComponent
        id={tire.id}
        image={tire.image}
        title={`${tire.brand} ${tire.size}`}
        description={`${tire.price}$`}
        height="220"
      />
    </div>
  );
};

export default PopularProductItem;
