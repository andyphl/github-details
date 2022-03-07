import styles from "./Avatar.module.scss";

export const Avatar = ({ src, alt = "github avatar" }) => {
  return <img src={src} alt={alt} className={styles.avatar} />;
};
