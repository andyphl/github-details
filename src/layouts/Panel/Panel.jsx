import styles from "./Panel.module.scss";

export const Panel = ({ children }) => {
  return <div className={styles.panel}>{children}</div>;
};
