import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

// Import Swiper styles
import "swiper/css";
import { useEffect } from "react";

// a comp to make us return to first slide whenever data changes
const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0, 1);
  }, [data]);
  return <></>;
};

function Carousel({ data, component }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={80}
      >
        <Controls data={data} />
        <>
          <LeftArrow />
          <RightArrow />
        </>

        {data.map((item) => {
          return <SwiperSlide>{component(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;
