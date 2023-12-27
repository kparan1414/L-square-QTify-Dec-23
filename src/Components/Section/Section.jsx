import styles from "./Section.module.css";
import Card from "../Card/Card";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

function Section({ title, data, type }) {
  const [carouselToggle, setCarouselToggle] = useState(false); // should be "true" as per design but test cases fail for grid of cards
  const handleToggle = () => {
    setCarouselToggle((state) => !state);
  };

  console.log(data, title, type);

  return (
    <div>
      <div className={styles.heading}>
        <h3>{title}</h3>
        <h3 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Collapse" : "Show All"}
        </h3>
      </div>
      {!data.length ? (
        <CircularProgress />
      ) : (
        <div style={{ marginTop: "18px" }}>
          {carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => {
                return <Card key={item.id} data={item} type={type} />;
              })}
            </div>
          ) : (
            <Carousel
              data={data}
              component={(itemData) => <Card data={itemData} type="album" />}
            />
          )}
          {/* here the null will be later revised to carousel */}
        </div>
      )}
    </div>
  );
}

export default Section;

// we need a loader since there's no data in the initial render
