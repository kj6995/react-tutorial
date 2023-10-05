import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Quiz.css";
import Questionare from "./Questionare";
const API_URL =
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentindex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    Axios.get(API_URL)
      .then((res) => res.data)
      .then((data) => {
        const ques = data.results.map((q) => ({
          ...q,
          answers: [q.correct_answer, ...q.incorrect_answers].sort(
            () => Math.random() - 0.5
          ),
        }));
        setQuestions(ques);
      });
  }, []);

  const handleAnswer = (option) => {
    //check if the option is the correct answer or not
    //if it is correct then update the score
    if (!showAnswer) {
      if (option === questions[currentindex].correct_answer) {
        setScore(score + 1);
      }
    }

    //show the correct answer
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentindex + 1);
    setShowAnswer(false);
  };

  return (
    <div>
      {questions.length > 0 ? (
        <div className="container">
          {currentindex >= questions.length ? (
            <h1>Game Ended, score: {score}</h1>
          ) : (
            <Questionare
              data={questions[currentindex]}
              showAnswer={showAnswer}
              handleAnswer={handleAnswer}
              handleNextQuestion={handleNextQuestion}
            />
          )}
        </div>
      ) : (
        <div className="container">Loading...</div>
      )}
    </div>
  );
}

export default Quiz;
