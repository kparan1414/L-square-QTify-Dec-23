import styles from "./MusicPlayer.module.css";
import play from "../../assets/play.png";
import song from "../../assets//song.png";

export default function MusicPlayer() {
  return (
    <div className={styles.player}>
      <div className={styles.songDetail}>
        <img src={song} alt="" />
        <div className={styles.songText}>
          <p style={{ lineHeight: "24px", fontSize: "16px" }}>Song name</p>
          <p style={{ lineHeight: "18px", fontSize: "12px" }}>Album name</p>
        </div>
      </div>
      <img className={styles.icon} src={play} alt="" />
      <div className={styles.barWrapper}>
        <p>0:38</p>
        <div className={styles.bar}>
          <div className={styles.barChild}></div>
        </div>
        <p>3:38</p>
      </div>
    </div>
  );
}
