import React from "react";
import styles from "./Die.module.css";

function Die(props) {
  const { value, isHeld, id, handleClick } = props;

  return (
    <button
      className={`${styles.die} ${isHeld ? styles.held : null}`}
      type="button"
      onClick={() => handleClick(id)}
      aria-label={`Die with number ${value}, currently ${isHeld? 'held': 'not held'}`}
      aria-pressed={isHeld}
    >
      {value}
    </button>
  );
}

export default Die;
