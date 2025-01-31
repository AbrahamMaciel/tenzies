import React from "react";
import styles from "./GameBoard.module.css";
import DiceBoard from "../DiceBoard/DiceBoard";

function GameBoard(props) {
  return (
    <div className={styles.gameBoard}>
      <DiceBoard generateAllDice={props.generateAllDice} />
      <button type="button" className={styles.rollBtn} onClick={props.rollDice}>
        Roll
      </button>
    </div>
  );
}

export default GameBoard;
