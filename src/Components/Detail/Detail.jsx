import styles from "./Detail.module.css";

export default function Detail({ title, image, description, songs, follows }) {
  // Reminder: To make a function which takes in the song arr & returns duration
  // format: "3hr 45min"
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={image} alt={title} />
      <div className={styles.details}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.subDetails}>
          <p>{`${songs.length} songs`}</p>
          <div className={styles.dot}></div>
          <p>Duration</p>
          <div className={styles.dot}></div>
          <p>{`${follows} Follows`}</p>
        </div>
        <div className={styles.btnContainer}>
          <button id={styles.shuffleBtn}>Shuffle</button>
          <button id={styles.addToLibBtn}>Add to library</button>
        </div>
      </div>
    </div>
  );
}
