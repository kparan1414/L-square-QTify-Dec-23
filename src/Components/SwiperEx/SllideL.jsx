import { useEffect, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";

const SlideL = ({ children }) => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, []);

  return (
    <div>
      {isBeginning || (
        <button onClick={() => swiper.slidePrev()}>Move to left</button>
      )}

      {swiper.isBeginning ? <p>hello</p> : <p>scene hai</p>}
    </div>
  );
};

export default SlideL;
