import React, { useRef } from "react";
import StorageHandler from "../Storage";
import { Navigate } from "react-router-dom";
import "./styles/QuizResult.scss";

const getRemark = (score, total) => {
  const grade = Math.floor((score / total) * 10);
  switch (grade) {
    case 0:
    case 1:
    case 2:
    case 3:
      return "You have failed and you need to work really hard. Best of luck 🤞🏻";
    case 4:
    case 5:
      return "Congratulations. You have passed but still have scope to improve 😇";
    case 6:
      return "Congratulations. You are on the right track and will get better as the time passes 👍🏻";
    case 7:
    case 8:
      return "Congratulations. You are really smart and secured a Distinction 🔥";
    case 9:
    case 10:
      return "You must have cheated in the test, because you scored more than 90% 😘";
  }
};

const QuizResult = () => {
  const questions = StorageHandler.getQuestions();
  const answers = StorageHandler.getAnswers();
  let score = 0;
  // console.log(questions, answers);

  // ! theme https://colorhunt.co/palette/ecf2ffe3dffde5d1fafff4d2

  return !questions || !answers ? (
    <Navigate to="/quiz" />
  ) : (
    <div className="result-element">
      <h1 className="title">Fingers Crossed... It's RESULT TIME!</h1>
      <div className="answer-list">
        {questions.map((e, index) => {
          let isCorrect = e.correct_answer === answers[index];
          if (isCorrect) score++;
          return (
            <div className="answer-element" key={index}>
              <p className="question-element">
                <span
                  dangerouslySetInnerHTML={{
                    __html: `Q ${index + 1}. ${e.question}`,
                  }}
                />
                <span>{isCorrect ? "✅" : "❌"}</span>{" "}
              </p>
              <div className="answer-display">
                <span>Your answer : {answers[index]}</span>{" "}
                <span>Correct answer : {e.correct_answer}</span>{" "}
              </div>
            </div>
          );
        })}
      </div>
      <div className="score-container">
        <h4 className="score-headline">
          {score > answers.length / 2
            ? "Congratulations!"
            : "Need to Work Hard!"}
        </h4>
        <div className="score-card">
          <span className="text">You Scored</span>{" "}
          <span className="score">
            {score}/{answers.length}
          </span>
        </div>
        <p className="remark">{getRemark(score, answers.length)}</p>
      </div>
    </div>
  );
};

export default QuizResult;
