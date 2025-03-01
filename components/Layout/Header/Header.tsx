import Toolbar from "@mui/material/Toolbar";
import SearchInput from "../../common/SearchInput";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  return (
    <header>
      <Toolbar>
        <HeaderLeft />
        <SearchInput />
        <HeaderRight />
      </Toolbar>
    </header>
  );
};

export default Header;
