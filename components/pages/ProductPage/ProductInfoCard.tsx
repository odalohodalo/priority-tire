import { useState } from "react";
import { Button, Typography, Card, CardContent, Box } from "@mui/material";

type ProductInfoCardProps = {
  brand: string | null;
  size: string | null;
  season: string | null;
  price: number | null;
};

const ProductInfoCard = ({
  brand,
  size,
  season,
  price,
}: ProductInfoCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const handleIncreaseQuantity = () => setQuantity(quantity + 1);
  const handleDecreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <Card
      sx={{
        maxWidth: 400,
        padding: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h1" gutterBottom>
          {brand} {size}
        </Typography>

        <Typography variant="body1" color="textSecondary" gutterBottom>
          <strong>Season:</strong> {season}
        </Typography>

        <Typography variant="h6" color="textPrimary" gutterBottom>
          <strong>{price}$</strong>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            variant="outlined"
            onClick={handleDecreaseQuantity}
            sx={{ width: 40 }}
          >
            -
          </Button>
          <Typography variant="body1">{quantity}</Typography>
          <Button
            variant="outlined"
            onClick={handleIncreaseQuantity}
            sx={{ width: 40 }}
          >
            +
          </Button>
        </Box>

        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Add to Cart - {quantity * (price ?? 0)}$
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductInfoCard;
