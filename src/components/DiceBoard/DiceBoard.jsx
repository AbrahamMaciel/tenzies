import React from "react";
import Die from "../Die/Die";
import styles from "./DiceBoard.module.css";

function generateNewDice() {
  const diceNumbers = [];
  for (let index = 0; index < 10; index++) {
    const randNum = Math.floor(Math.random() * 7);
    diceNumbers.push(randNum);
  }
  //   console.log(diceNumbers);
  return diceNumbers;
}

function DiceBoard() {
  return (
    <div className={styles.diceBoard}>
      {generateNewDice().map((item, index) => (
        <Die value={item} key={index} />
      ))}
    </div>
  );
}

export default DiceBoard;
