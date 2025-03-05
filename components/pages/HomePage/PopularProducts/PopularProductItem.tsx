import CardComponent from "@/components/common/CardComponent";
import { Tire } from "@/types/tiresTypes";

type PopularProductItemProps = {
  tire: Tire;
};

const PopularProductItem = ({ tire }: PopularProductItemProps) => {
  return (
    <CardComponent
      id={tire.id}
      image={tire.image}
      title={`${tire.brand} ${tire.size}`}
      description={`${tire.price}$`}
      height="220"
    />
  );
};

export default PopularProductItem;
