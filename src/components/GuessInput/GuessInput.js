import React, { useState } from "react";

function GuessInput({ handleGuess }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGuess({
      id: crypto.randomUUID(),
      letters: tentativeGuess.split(""),
    });
    setTentativeGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        pattern="[A-Z]{5}"
        title="The guess should be 5 uppercase letters."
        value={tentativeGuess}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
        type="text"
      />
    </form>
  );
}

export default GuessInput;
