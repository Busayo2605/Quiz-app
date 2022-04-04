import { Link } from "react-router-dom";
import { HomeContainer } from "./home.style";

const Home = () => {

  return (
    <div className="home">
      <HomeContainer>
        <div className="home-details">
          <h2>Welcome To Quiz Trivia</h2>
          <Link to="/quiz">Get Started</Link>
        </div>
      </HomeContainer>
    </div>
  );
};

export default Home;
