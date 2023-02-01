import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
const GuessList = ({ answer, guesses }) => {
  return (
    <div className="guess-results">
      {guesses.map((guess, id) => {
        const letters = checkGuess(guess, answer);
        return (
          <p key={id} className="guess">
            {letters.map((letter, i) => (
              <span key={i} className={`cell ${letter.status}`}>
                {letter.letter}
              </span>
            ))}
          </p>
        );
      })}
      {range(6 - guesses.length).map((item) => (
        <p key={item} className="guess">
          {range(5).map((cell) => (
            <span key={cell} className="cell"></span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default GuessList;
