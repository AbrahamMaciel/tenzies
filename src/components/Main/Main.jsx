import React from "react";
import styles from "./Main.module.css";
import GameBoard from "../GameBoard/GameBoard";
import { nanoid } from "nanoid";

function Main() {
  const [dice, setDice] = React.useState(generateAllDice());
  // console.log(dice);

  function hold(id) {
    setDice((prevDice) => {
      return prevDice.map((dieObj) => {
        if (dieObj.id === id) {
          return { ...dieObj, isHeld: !dieObj.isHeld };
        } else {
          return { ...dieObj };
        }
      });
    });
    // console.log(dice);

    // const updatedDices = dice.map((diceObj) => {
    //   if (diceObj.id == id) {
    //     return { ...diceObj, isHeld: !diceObj.isHeld };
    //   } else {
    //     return { diceObj };
    //   }
    // });
  }

  function rollDice() {
    setDice(prevDice => prevDice.map(dieObj=>
      dieObj.isHeld ?
        dieObj :
        {...dieObj, value: Math.ceil(Math.random() * 6)}
    ))
  }

  function generateAllDice() {
    // This is the classy imperative way to do this:
    //
    //   const diceNumbers = [];
    //   for (let index = 0; index < 10; index++) {
    //     const randNum = Math.ceil(Math.random() * 6);
    //     diceNumbers.push(randNum);
    //   }
    //   //   console.log(diceNumbers);
    //   return diceNumbers;
    //
    // But theres another cooler functional way:

    // This one creates a new array, then fills it with zeroes then maps over it and returns another array the same size but with the contents randomized.
    // return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));

    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  return (
    <main>
      <GameBoard rollDice={rollDice} dice={dice} hold={hold} />
    </main>
  );
}

export default Main;
