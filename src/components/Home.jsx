import { Link } from "react-router-dom";
import "./styles/Home.scss";
import HomeTitle from "./HomeTitle";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <HomeTitle className="hero-title" />
      </div>
      <div className="container">
        <h2 className="container-title">
          <p className="quoted">Embark</p> on a Journey of Coding Challenges{" "}
          with <p className="quoted">CodeQuizLite</p>
        </h2>
        <p className="container-text">
          🚀Welcome to CodeQuizLite! Dive into the world of programming with our
          engaging quiz, designed to challenge and entertain coding enthusiasts.
          Unleash your knowledge as you tackle a diverse range of interesting
          questions that span various programming languages, algorithms, and
          concepts. From JavaScript to algorithms, each question is crafted to
          provide a fun and educational experience. Whether you're a coding
          novice or a seasoned developer, CodeQuizLite offers a delightful
          journey through the realms of programming logic. Get ready to embark
          on a quiz adventure, test your coding prowess, and enjoy the thrill of
          mastering the art of programming in a playful way. Happy coding!
          <Link className="start" to="/quiz">
            Start Quiz 🚀
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
