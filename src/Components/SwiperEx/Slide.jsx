import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

const Slide = ({ children }) => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div>
      {isEnd || <button onClick={() => swiper.slideNext()}>Move Right</button>}
    </div>
  );
};

export default Slide;
