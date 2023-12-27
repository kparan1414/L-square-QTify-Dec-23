import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./LeftArrow.module.css";
import { ReactComponent as LArrow } from "../../assets/LeftArrow.svg";

const LeftArrow = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, []);

  return (
    <div className={styles.leftArrow}>
      {isBeginning || <LArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default LeftArrow;
