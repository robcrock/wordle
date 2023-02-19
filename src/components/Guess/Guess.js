import React from "react";

function Guess({ letters }) {
  return (
    <p className="guess">
      {letters.map(({ id, letter, status }) => {
        return (
          <span key={id} className={status !== "" ? `cell ${status}` : "cell"}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
