import { useState } from "react";
import { Icon, Nav } from "..";
import styles from "./Hamburger.module.scss";

export const Hamburger = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        aria-controls="main-menu"
        aria-expanded={String(active)}
        className={`${styles.hamburger} ${active ? styles.active : ""} `}
        onClick={() => {
          setActive((prev) => !prev);
        }}
      >
        <Icon.Menu />
      </button>
      <Nav active={active} />
    </>
  );
};
