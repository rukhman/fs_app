import React from "react";
import { Card } from "./Card/Card";
import styles from "./cardlist.less";

export function CardList() {
  return (
    <ul className={styles.cardlist}>
      <Card />
    </ul>
  );
}
