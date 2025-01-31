import React from "react";
import Die from "../Die/Die";
import styles from "./DiceBoard.module.css";


function DiceBoard(props) {
    

    const diceElements = props.generateAllDice().map((item, index) => (
        <Die value={item} key={index} />
      ))

  return (
    <div className={styles.diceBoard}>
      {diceElements}
    </div>
  );
}

export default DiceBoard;
