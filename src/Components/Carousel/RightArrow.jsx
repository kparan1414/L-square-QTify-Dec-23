import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./RightArrow.module.css";
import { ReactComponent as RArrow } from "../..//assets/RightArrow.svg";

const RightArrow = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div className={styles.rightArrow}>
      {isEnd || <RArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default RightArrow;
