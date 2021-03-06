import React, { useContext, useEffect } from "react";
import Loader from "../../component/loader/Loader";
import Navbar from "../../component/navbar/Navbar";
import { Container } from "./science.style";
import { QuizContext } from "../../context/QuizContext";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { science } from "../../data/science";

const Arts = () => {
  const {
    Loading,
    setLoading,
    Question,
    setQuestion,
    QuestionNumber,
    HandleNext,
    HandlePrev,
    handleAnswer,
  } = useContext(QuizContext);

  
  useEffect(() => {
    const SortQuestion = science.map((opt) => ({ sort: Math.random(), value: opt }))
      .sort((a, b) => a.sort - b.sort)
      .map((item) => item.value)
    
    setQuestion(SortQuestion[QuestionNumber + 1]);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [QuestionNumber, setLoading, setQuestion]);

  const opts = [];
  const opt = opts.concat(Question.incorrect_answers);
  const option = opt.concat(Question.correct_answer);

  const Option = option
    .map((opt) => ({ sort: Math.random(), value: opt }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value);


  return (
    <div>
      {Loading ? (
        <Loader />
      ) : (
        <div className="quiz-conatiner">
          <Container>
            <Navbar />
            <div className="quiz-details">
              <div className="quiz">
                <div className="question--container">
                  <h2 className="question">{Question.question}</h2>
                </div>
                <div className="option--container">
                  {Option.map((opt, index) => (
                    <button
                      onClick={handleAnswer}
                      key={index}
                      className="option"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className="ctrl-container">
                  <FaArrowCircleLeft
                    className="question-ctrl"
                    onClick={HandlePrev}
                  />

                  <FaArrowCircleRight
                    className="question-ctrl"
                    onClick={HandleNext}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Arts;
