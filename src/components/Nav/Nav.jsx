import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

export const Nav = ({ active }) => {
  return (
    <nav
      role="navigation"
      aria-label="Main menu"
      className={`${styles.nav} ${active ? styles.active : ""}`}
    >
      <li>
        <Link to="/" exact="true" className={styles.link}>
          Home
        </Link>
      </li>
      <li className={styles.active}>
        <Link to="/repos" className={styles.link}>
          Repositories
        </Link>
      </li>
      <li>
        <Link to="/followers" className={styles.link}>
          Followers
        </Link>
      </li>
    </nav>
  );
};
