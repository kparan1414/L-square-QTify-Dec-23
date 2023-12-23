import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Search from "../Search/Search";

function Navbar({ searchData }) {
  return (
    <nav className={styles.wrapper}>
      <a href="/">
        <Logo />
      </a>
      <Search
        searchData={searchData}
        placeholder="Search a album of your choice"
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
