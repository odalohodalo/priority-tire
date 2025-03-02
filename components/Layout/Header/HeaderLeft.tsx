import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "@/components/common/Logo";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import style from "./Header.module.css";

type HeaderLeftProps = {
  isMobile: boolean;
};

const HeaderLeft = ({ isMobile }: HeaderLeftProps) => {
  return isMobile ? (
    <div className={style.headerLeft}>
      <IconButton size="large" color="inherit" aria-label="open hamburger menu">
        <MenuIcon />
      </IconButton>
      <IconButton size="large" color="inherit" aria-label="search">
        <SearchOutlinedIcon />
      </IconButton>
    </div>
  ) : (
    <Logo width={200} height={27} />
  );
};

export default HeaderLeft;
