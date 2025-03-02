import useIsMobile from "@/lib/hooks/useIsMobile";

import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";
import HeaderCenter from "./HeaderCenter";
import NavigationTabs from "../Navigation/NavigationTabs";
import Divider from "@mui/material/Divider";

import style from "./Header.module.css";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className={style.pageHeader}>
      <div className={style.toolbar}>
        <HeaderLeft isMobile={isMobile} />
        <HeaderCenter isMobile={isMobile} />
        <HeaderRight isMobile={isMobile} />
      </div>
      <Divider orientation="horizontal" />
      {!isMobile && <NavigationTabs />}
    </header>
  );
};

export default Header;
