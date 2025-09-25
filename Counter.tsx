"use client";
import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.counterContainer}>
      <button className={styles.counterButton} onClick={() => setCount(count + 1)}>
        +
      </button>
      <span className={styles.counterValue}>
        {count}
      </span>
      <button className={styles.counterButton} onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}
