import React from "react";
import styles from "./GameBoard.module.css";
import DiceBoard from "../DiceBoard/DiceBoard";

function GameBoard(props) {
  return (
    <div className={styles.gameBoard}>
      <div className={styles.gameText}>
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <DiceBoard dice={props.dice} hold={props.hold} />
      <button type="button" className={styles.rollBtn} onClick={props.rollDice}>
        Roll
      </button>
    </div>
  );
}

export default GameBoard;
