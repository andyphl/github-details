import React from "react";
import { Icon } from "..";
import styles from "./LoadingSpin.module.scss";

export const LoadingSpin = () => {
  return <Icon.Loader className={styles.loading} />;
};
