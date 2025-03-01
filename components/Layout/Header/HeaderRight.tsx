import { IconButton } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const HeaderRight = () => {
  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        color="inherit"
      >
        <PersonOutlinedIcon />
      </IconButton>
      <IconButton size="large" aria-label="show favorite" color="inherit">
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton size="large" aria-label="shopping cart" color="inherit">
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default HeaderRight;
