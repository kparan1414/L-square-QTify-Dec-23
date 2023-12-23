import styles from "./HeroSection.module.css";
import heroImg from "../../assets/headphones.png";
function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img width="212px" height="212px" src={heroImg} alt="headphones" />
    </div>
  );
}

export default HeroSection;
