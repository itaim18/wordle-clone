import React from "react";
import { NUM_OF_GUESSES_ALLOWED, alphabet } from "../../constants";

const Form = ({ guesses, setGuesses, answer, setIsWin, isWin }) => {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess.length !== 5 || guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    if (guess === answer) {
      setIsWin(true);
    }
    const newGuess = guess;
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    setGuess("");
  };

  const handleKeyDown = (event) => {
    const keyPressed = event.key.toUpperCase();
    console.log("User pressed: ", keyPressed);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="guess-input-wrapper"
        onKeyDown={handleKeyDown}
      >
        <input type="text" />
        <div
          style={{
            border: "solid rgb(50,50,50,0.2)",
            padding: "5px",
            width: "560px",
            borderRadius: "15px",
            height: "240px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            margin: "0 -15%",
          }}
        >
          {alphabet.map((key, i) => (
            <button
              style={{
                background: "rgb(50,50,50,0.2)",
                borderRadius: "15px",

                width: "50px",
                height: "68px",
                textAlign: "center",
              }}
              key={i}
              onClick={(e) => console.log(e.target.innerText)}
            >
              {key}
            </button>
          ))}
        </div>{" "}
      </form>
    </>
  );
};

export default Form;
