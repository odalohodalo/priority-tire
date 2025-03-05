import Image from "next/image";

import style from "../HomePage.module.css";

const OurPromotionsSection = () => {
  return (
    <div>
      <h1 className={style.ourPromotionsTitle}>Save Now With Our Promotions</h1>
      <div className={style.ourPromotionsContainer}>
        <Image
          src="/images/promotions/first_time_buyer.jpg"
          alt="first time buyer"
          width={350}
          height={450}
        />
        <Image
          src="/images/promotions/five_percent_disc.jpg"
          alt="five percent discount"
          width={350}
          height={450}
        />
        <Image
          src="/images/promotions/tire_clearance.jpg"
          alt="tire clearance"
          width={350}
          height={450}
        />
      </div>
    </div>
  );
};

export default OurPromotionsSection;
