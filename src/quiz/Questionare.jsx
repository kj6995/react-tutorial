import React from "react";

function Questionare({
  handleAnswer,
  handleNextQuestion,
  showAnswer,
  data: { question, answers, correct_answer },
}) {
  return (
    <>
      <div className="questionClass">
        <h1>{question}</h1>
      </div>
      <div className="btn-overall">
        {answers.map((answer) => {
          const specialClassName = showAnswer
            ? answer === correct_answer
              ? "green-btn"
              : "red-btn"
            : "";
          return (
            <button
              className={`normal-btn ${specialClassName}`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            >
            </button>
          );
        })}
      </div>
      {showAnswer && (
        <button onClick={handleNextQuestion} className="next-question">
          Next Question
        </button>
      )}
    </>
  );
}

export default Questionare;
