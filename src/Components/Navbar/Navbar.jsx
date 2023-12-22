import styles from "./Navbar.module.css";
import logo from "../../assets/qtify.png";
import Button from "../Button/Button";
import Search from "../Search/Search";

function Navbar() {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="qtify" />
      <Search placeholder="Search a album of your choice" />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default Navbar;
