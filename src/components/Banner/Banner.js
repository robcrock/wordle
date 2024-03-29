import React from "react";

function Banner({ gameStatus, guessCount, answer }) {
  if (gameStatus === "running") return null;

  if (gameStatus === "won") {
    return (
      <div className="happy banner" data-testid="banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{`${guessCount} guess${
            guessCount === 1 ? "" : "es"
          }`}</strong>
          .
        </p>
      </div>
    );
  }

  if (gameStatus === "lost") {
    return (
      <div className="sad banner" data-testid="banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
