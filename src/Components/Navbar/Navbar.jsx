import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

function Navbar({ searchData }) {
  return (
    <nav className={styles.wrapper}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        searchData={searchData}
        placeholder="Search a album of your choice"
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
