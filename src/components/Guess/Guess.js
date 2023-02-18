import React from "react";

function Guess({ letters }) {
  return (
    <p className="guess">
      {letters.map(({ id, letter }) => {
        return (
          <span key={id} className="cell">
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
