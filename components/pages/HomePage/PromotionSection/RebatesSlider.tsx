import { Box } from "@mui/material";
import RebatesSliderItem from "./RebatesSliderItem";

const RebatesSlider = () => {
  return (
    <div>
      <h1>Save with Rebates and Promotions</h1>
      <Box sx={{ display: "flex", gap: 2 }}>
        <RebatesSliderItem />
      </Box>
    </div>
  );
};

export default RebatesSlider;
