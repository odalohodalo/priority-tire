import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  width: number;
  height: number;
};

const Logo = ({ width, height }: LogoProps) => {
  return (
    <Link href="/" aria-label="Home">
      <Image
        src="/images/logo.webp"
        alt="Company Logo"
        width={width}
        height={height}
      />
    </Link>
  );
};

export default Logo;
