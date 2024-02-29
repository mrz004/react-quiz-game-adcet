import { NavLink, useLocation } from "react-router-dom";
import "./styles/Navbar.scss";

const Navbar = () => {
  const url = useLocation().pathname.split("/")[1];
  const showBtn = url !== "quiz" && url !== "result";
  return (
    <nav className="navbar">
      <NavLink className="logo" to="/">
        CodeQuizLite
      </NavLink>
      {showBtn && (
        <NavLink className="start" to="/quiz">
          Start Quiz
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
