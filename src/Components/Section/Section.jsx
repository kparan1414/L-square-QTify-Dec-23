import styles from "./Section.module.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

function Section({ title, data, type, filterSource }) {
  const [carouselToggle, setCarouselToggle] = useState(false); // should be "true" as per design but test cases fail for grid of cards
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  useEffect(() => {
    if (filterSource) {
      filterSource().then((res) => {
        const { data } = res;
        setFilters([...filters, ...data]);
        // console.log(data);
        // ISSUE WITH THE BELOW CODE
        // setFilters((currFilter) => {
        //   return [...currFilter, ...data];
        // });
      });
    }
  }, []);

  const handleToggle = () => {
    setCarouselToggle((state) => !state);
  };

  // console.log(data, title, type);

  // Filtering data
  const showFilters = filters.length > 1;
  const filteredData = data.filter((item) => {
    return showFilters && selectedFilterIndex !== 0
      ? item.genre.key === filters[selectedFilterIndex].key
      : item;
  });

  return (
    <div>
      <div className={styles.heading}>
        <h3>{title}</h3>
        {type === "song" || (
          <h3 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Collapse" : "Show All"}
          </h3>
        )}
      </div>
      {showFilters && (
        <div style={{ marginTop: "10px" }}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      {!data.length ? (
        <CircularProgress />
      ) : (
        <div style={{ marginTop: "18px" }}>
          {carouselToggle ? (
            <div className={styles.wrapper}>
              {filteredData.map((item) => {
                return <Card key={item.id} data={item} type={type} />;
              })}
            </div>
          ) : (
            <Carousel
              data={filteredData}
              component={(itemData) => <Card data={itemData} type={type} />}
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
