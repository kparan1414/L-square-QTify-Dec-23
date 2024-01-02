import styles from "./Accordion.module.css";
import icon from "../../assets/icon.png";
import { useState } from "react";

export default function Accordion({ question, answer }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={styles.accordion}>
      <div className={styles.question}>
        <p>{question}</p>
        <img
          onClick={handleToggle}
          className={`${styles.icon} ${isVisible ? styles.activeIcon : ""}`}
          src={icon}
          alt="icon"
        />
      </div>
      <div className={`${styles.answer} ${isVisible ? styles.active : ""}`}>
        <p className={styles.text}>{answer}</p>
      </div>
    </div>
  );
}
