import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        pattern="[A-Z]{5}"
        title="The guess should be 5 uppercase letters."
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        type="text"
      />
    </form>
  );
}

export default GuessInput;
