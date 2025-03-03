import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

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
    <>
      <Card key={item.id} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default RebatesSliderItem;
