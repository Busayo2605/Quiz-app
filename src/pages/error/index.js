import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Error.style";

const Error = () => {
  return (
    <div className="score">
      <Container>
        <div className="info">
          <div className="details">
            <h2>404</h2>
            <span>Page Not Found</span>
          </div>
          <Link to="/quiz" className="link-btn">
            Return Home
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Error;
