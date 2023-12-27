// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import Slide from "./Slide";
import SlideL from "./SllideL";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Swipers = () => {
  return (
    <Swiper
      spaceBetween={40}
      modules={[Navigation]}
      slidesPerView="auto"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(move) => console.log(move)}
    >
      <Slide />
      <SlideL />
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Swipers;
