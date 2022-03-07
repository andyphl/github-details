import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const Nav = ({ active }) => {
  const { pathname } = useLocation();
  return (
    <nav
      role="navigation"
      aria-label="Main menu"
      className={`${styles.nav} ${active ? styles.active : ""}`}
    >
      <li className={pathname === "/" ? styles.active : ""}>
        <Link to="/" exact="true" className={styles.link}>
          Home
        </Link>
      </li>
      <li className={pathname === "/repos" ? styles.active : ""}>
        <Link to="/repos" className={styles.link}>
          Repositories
        </Link>
      </li>
      <li className={pathname === "/followers" ? styles.active : ""}>
        <Link to="/followers" className={styles.link}>
          Followers
        </Link>
      </li>
    </nav>
  );
};
