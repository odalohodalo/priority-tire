import { CAROUSEL_SETTINGS } from "@/lib/constants/carouselSettings";
import Slider from "react-slick";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const settings = CAROUSEL_SETTINGS;

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
