import Image from "next/image";

import style from "./HomePage.module.css";

const HeroBanner = () => {
  return (
    <div className={style.heroBannerContainer}>
      <Image
        src="/images/hero_banner.jpg"
        alt="hero banner"
        objectFit="cover"
        fill
      />
    </div>
  );
};

export default HeroBanner;
