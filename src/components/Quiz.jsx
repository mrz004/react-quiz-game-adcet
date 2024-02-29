import { Link } from "react-router-dom";
import StorageHandler from "../Storage";
import QuestionElement from "./QuestionElement";
import { useEffect, useRef, useState } from "react";
import "./styles/Quiz.scss";
import config from "../config";

const Quiz_ErrorComponent = () => (
  <div className="error-message">
    503 - Error fetching Questions! Please refresh the page.{" "}
    <span
      style={{
        color: "darkblue",
        textDecoration: "underline",
        cursor: "pointer",
      }}
      onClick={(_) => {
        StorageHandler.clear();
        window.location.replace("/");
      }}
    >
      Try Again...
    </span>
  </div>
);

const Quiz = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const questionCount = useRef(0);
  const questions = StorageHandler.getQuestions();
  const [finish, setFinish] = useState(false);

  // console.log(useLocation().pathname, resultPath);

  useEffect(
    (_) => {
      setCurrentQuestion(questions[questionCount.current]);
    },
    [questionCount.current]
  );

  useEffect(
    (_) => {
      if (finish) StorageHandler.setAnswers(answers);
    },
    [finish]
  );

  function submitAnswer(index, userAnswer) {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = userAnswer;
      return updatedAnswers;
    });

    if (questionCount.current + 1 === config.question_count) {
      setFinish(true);
    } else {
      questionCount.current = index + 1;
      setCurrentQuestion(questions[questionCount.current]);
    }
  }

  // console.log(questions, answers);

  return (
    <div className="quiz-component">
      {questions && questions.length && currentQuestion ? (
        <QuestionElement
          questionNumber={questionCount.current + 1}
          question={currentQuestion}
          submitAction={submitAnswer}
          isLast={false}
          isDisabled={finish}
        />
      ) : (
        <Quiz_ErrorComponent />
      )}
      {finish && (
        <Link className="view_result" to="/result">
          View Result
        </Link>
      )}
    </div>
  );
};

export default Quiz;
