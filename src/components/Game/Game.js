import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(() => {
    return range(0, NUM_OF_GUESSES_ALLOWED).map((guess) => {
      const letters = range(0, 5).map((letter) => {
        return { id: crypto.randomUUID(), letter: "" };
      });
      return { id: crypto.randomUUID(), letters };
    });
  });

  const handleGuess = (guess) => {
    setGuesses((prevGuesses) => {
      // Create a copy of the previous guesses.
      let nextGuesses = [...prevGuesses];
      // Add the new guess to the beginning of the array.
      nextGuesses.unshift(guess);
      // Remove the last guess from the array.
      nextGuesses.pop();
      // Map over the letters in the guess, add an id to each letter and replace
      // the previous value of letters with this array.
      nextGuesses[0].letters = Array.from(guess.letters).map((letter) => {
        return { id: crypto.randomUUID(), letter };
      });
      // Return the new array.
      return nextGuesses;
    });
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
