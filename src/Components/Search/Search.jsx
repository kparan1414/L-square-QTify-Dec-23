// importing svg as a component
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import styles from "./Search.module.css";

function Search({ placeholder }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input
        required
        placeholder={placeholder}
        className={styles.input}
      ></input>
      <button className={styles.icon} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
