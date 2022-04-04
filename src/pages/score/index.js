import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../component/loader/Loader";
import { QuizContext } from "../../context/QuizContext";
import { Container } from "./score.style";

const navigate = useNavigate;
const Score = () => {
  const { Score,Loading, setLoading } = useContext(QuizContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  const handleRefresh = () => {
    window.location.reload();
    navigate("/quiz");
  };
  
  if (Loading) {
    return <Loader />
  }

  return (
    <div className="score">
      <Container>
        <div className="info">
          <div className="details">
            <h2>Congratulations!!!</h2>
            <span>Your Score is {Score}/10</span>
          </div>
          <Link to="/quiz" onClick={handleRefresh} className="link-btn">
            Go To Category
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Score;
