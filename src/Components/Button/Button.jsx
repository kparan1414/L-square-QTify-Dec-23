import styles from "./Button.module.css";

function Button({ children, handleClick }) {
  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
