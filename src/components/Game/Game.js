import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function initialGuesses() {
  return range(NUM_OF_GUESSES_ALLOWED).map((guess) => {
    const letters = range(5).map((letter) => {
      return { id: Math.random(), letter: "", status: "" };
    });
    return { id: Math.random(), letters };
  });
}

function Game() {
  const [guesses, setGuesses] = React.useState(() => initialGuesses());
  const [guessCount, setGuessCount] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState("running");

  const handleGuess = (guess) => {
    const nextGuessCount = guessCount + 1;
    setGuessCount((prevGuessCount) => prevGuessCount + 1);

    setGuesses((prevGuesses) => {
      // Check the guess against the answer.
      const letterStatus = checkGuess(guess.letters.join(""), answer);

      // Check if the game is won or lost.
      letterStatus.filter((letter) => letter.status === "correct").length ===
        5 && setGameStatus("won");
      if (nextGuessCount >= NUM_OF_GUESSES_ALLOWED) setGameStatus("lost");

      // Create a copy of the previous guesses.
      let nextGuesses = [...prevGuesses];
      // Add the new guess to the beginning of the array.
      nextGuesses.unshift(guess);
      // Remove the last guess from the array.
      nextGuesses.pop();
      // Map over the letters in the guess, add an id to each letter and replace
      // the previous value of letters with this array.
      nextGuesses[0].letters = guess.letters.map((letter, i) => {
        return {
          id: Math.random(),
          letter,
          status: letterStatus[i].status,
        };
      });
      // Return the new array.
      return nextGuesses;
    });
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleGuess={handleGuess} gameStatus={gameStatus} />
      <Banner gameStatus={gameStatus} guessCount={guessCount} answer={answer} />
    </>
  );
}

export default Game;
