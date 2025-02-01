import React from "react";
import styles from "./Die.module.css";

function Die(props) {
  const { value, isHeld } = props;

  return (
    <button
      className={`${styles.die} ${isHeld ? styles.held : null}`}
      type="button"
    >
      {value}
    </button>
  );
}

export default Die;
