import React from "react";
import styles from "./Main.module.css";
import GameBoard from "../GameBoard/GameBoard";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";

function Main() {
  const [dice, setDice] = React.useState(() => generateAllDice());
  const newGameButton = React.useRef(null);

  let gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  React.useEffect(() => {
    if (gameWon) {
      console.log(newGameButton);
      newGameButton.current.focus();
    }
  }, [gameWon]);

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
    if (!gameWon) {
      setDice((prevDice) =>
        prevDice.map((dieObj) =>
          dieObj.isHeld
            ? dieObj
            : { ...dieObj, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setDice(generateAllDice());
    }
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
      {gameWon && <ReactConfetti />}
      <div aria-live="polite" className={styles["sr-only"]}>
        {gameWon && (
          <p>Congratulations you have Won! Press 'New Game' to start again.</p>
        )}
      </div>
      <GameBoard
        rollDice={rollDice}
        dice={dice}
        hold={hold}
        gameWon={gameWon}
        ref={newGameButton}
      />
    </main>
  );
}

export default Main;
