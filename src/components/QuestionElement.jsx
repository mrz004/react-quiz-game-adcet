import { useEffect, useRef } from "react";
import { generateQuestionSequence } from "./QuestionHelper";
import "./styles/QuestionElement.scss";

const optionTags = "abcdefghij".split("");

const QuestionElement = ({
  questionNumber,
  question,
  submitAction,
  isLast,
  isDisabled,
}) => {
  let currAnswer = "";
  let Options = generateQuestionSequence(question);

  // dev : setting up references for option elements
  let no_options = question.incorrect_answers.length + 1;
  const OptionElements = useRef(new Array(no_options));
  for (let i = 0; i < no_options; ++i) OptionElements.current[i] = useRef(null);

  // dev : selection cleanup for option elements
  useEffect(
    (_) => {
      OptionElements.current.forEach((option) =>
        option.current.classList.remove("selected")
      );
    },
    [question]
  );

  function selectElement(ele_indx) {
    OptionElements.current.forEach((e, curr_indx) => {
      if (ele_indx === curr_indx) e.current.classList.add("selected");
      else e.current.classList.remove("selected");
    });
  }

  return (
    <div className="question_element">
      <div
        className="question"
        dangerouslySetInnerHTML={{
          __html: `Q ${questionNumber}. ${question.question}`,
        }}
      />
      <div className="options_grid">
        {Options &&
          Options.map((op, i) => {
            return (
              <input
                type="button"
                onClick={(_) => {
                  // console.log(i, isDisabled);
                  if (isDisabled) return;
                  selectElement(i);
                  currAnswer = op;
                }}
                ref={OptionElements.current[i]}
                className="option"
                key={i}
                value={`${optionTags[i]}. ${op}`}
              />
            );
          })}
      </div>
      <button
        className="prevent-select"
        onClick={(_) => {
          if (isDisabled) return;
          submitAction(questionNumber - 1, currAnswer);
        }}
      >
        {isLast ? "Submit & Result" : "Next"}
      </button>
    </div>
  );
};

export default QuestionElement;
