import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [Score, setScore] = useState(0);
  const [Time, setTime] = useState(10);
  const [Question, setQuestion] = useState([]);
  const [QuestionNumber, setQuestionNumber] = useState(0);
  const [Loading, setLoading] = useState(true);
  const [Options, setOptions] = useState([]);

  const navigate = useNavigate();

  const HandleNext = () => {
    if (QuestionNumber === 9) {
      alert(`your score is ${Score} /10`);
      navigate("/Score");
    } else {
      setQuestionNumber(QuestionNumber + 1);
    }
  };
  const HandlePrev = () => {
    if (QuestionNumber === 0) {
    } else {
      setQuestionNumber(QuestionNumber - 1);
    }
  };

  const handleAnswer = (e) => {
    const target = e.target.innerText;
    const answer = Question.correct_answer;

    if (target === answer) {
      setScore((prev) => prev + 1);
      HandleNext();
    } else {
      setScore((prev) => prev);
      HandleNext();
    }
  };

  return (
    <QuizContext.Provider
      value={{
        Loading,
        Error,
        Score,
        Question,
        Options,
        QuestionNumber,
        Time,
        setTime,
        HandlePrev,
        HandleNext,
        handleAnswer,
        setScore,
        setQuestion,
        setOptions,
        setLoading,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
