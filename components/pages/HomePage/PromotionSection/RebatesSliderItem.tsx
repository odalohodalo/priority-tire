import CardComponent from "@/components/common/CardComponent";

type RebatesSliderItemData = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type RebatesSliderItemProps = {
  item: RebatesSliderItemData;
};

const RebatesSliderItem = ({ item }: RebatesSliderItemProps) => {
  return (
    <CardComponent
      id={item.id}
      image={item.image}
      title={item.title}
      description={item.description}
      height="140"
    />
  );
};

export default RebatesSliderItem;
