import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from "./header.less";

function AppComponent() {
  return (
    <header>
      <h1 className={styles.example}>Content</h1>
    </header>
  );
}

export const App = hot(AppComponent);
