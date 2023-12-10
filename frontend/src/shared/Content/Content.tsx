import React from "react";
import styles from "./content.less";

interface IContent {
  children: React.ReactNode;
}

export function Content({ children }: IContent) {
  return <div className={styles.content}>{children}</div>;
}
