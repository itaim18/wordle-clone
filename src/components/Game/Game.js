import React from "react";
import Form from "./Form";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessList from "./GuessList";
import Banner from "./Banner";
import Restart from "./Restart";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [isWin, setIsWin] = React.useState(false);
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      {(guesses.length === 6 || isWin) && <Restart />}
      <GuessList setIsWin={setIsWin} answer={answer} guesses={guesses} />
      <Form
        answer={answer}
        guesses={guesses}
        setGuesses={setGuesses}
        setIsWin={setIsWin}
        isWin={isWin}
      />
      {(guesses.length === 6 || isWin) && (
        <Banner isWin={isWin} arrSize={guesses.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
