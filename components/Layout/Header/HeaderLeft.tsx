import Image from "next/image";
import Link from "next/link";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderLeft = () => {
  return (
    <>
      <IconButton size="large" color="inherit" aria-label="open drawer">
        <MenuIcon />
      </IconButton>
      <Link href="/" aria-label="Home">
        <Image
          src="/images/logo.webp"
          alt="Company Logo"
          width={200}
          height={27}
        />
      </Link>
    </>
  );
};

export default HeaderLeft;
