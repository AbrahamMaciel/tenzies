import React from "react";
import Die from "../Die/Die";
import styles from "./DiceBoard.module.css";

function DiceBoard(props) {
  const allDice = props;
  const diceElements = allDice.dice.map((DieObject) => (
    <Die value={DieObject.value} key={DieObject.id} isHeld={DieObject.isHeld}/>
  ));

  console.log(diceElements);
  

  return <div className={styles.diceBoard}>{diceElements}</div>;
}

export default DiceBoard;
