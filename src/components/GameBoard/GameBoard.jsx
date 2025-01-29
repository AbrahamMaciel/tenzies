import React from "react";
import styles from "./GameBoard.module.css";
import DiceBoard from "../DiceBoard/DiceBoard";

function GameBoard() {
  return (
    <div className={styles.gameBoard}>
      <DiceBoard />
    </div>
  );
}

export default GameBoard;
