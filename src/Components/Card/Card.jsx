import { Chip, Tooltip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ display, data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, title, songs, slug, follows } = data;
        return (
          <Tooltip placement="top" arrow title={`${songs.length} songs`}>
            <a href={`/album/${slug}`}>
              <div className={`${styles.wrapper} ${display}`}>
                <div className={styles.card}>
                  <img src={image} alt="" loading="lazy" />
                  <div className={styles.banner}>
                    {/* <Chip
                      label={`${follows} follows`}
                      size="small"
                      className={styles.chip}
                    /> */}
                    <div className={styles.pill}>
                      <p>{follows} Follows</p>
                    </div>
                  </div>
                </div>
                <div className={styles.title}>
                  <p>{title}</p>
                </div>
              </div>
            </a>
          </Tooltip>
        );
      }

      case "song": {
        const { image, likes, title } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="" width={170} />
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.title}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}
export default Card;

// lets render card based on type
