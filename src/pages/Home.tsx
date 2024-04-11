import { Link } from "react-router-dom";
import Canvas from "../components/Canvas";
import "./Home.css";

const Home = () => {
  return (
    <div className="home fade-in ">
      <Canvas />
      <h1>SARBAST HESSO</h1>
      <h4>FRONT-END DEVELOPER</h4>
      <nav className="nav-links">
        <Link className="nav-link" to="/about" id="about">
          <span className="material-symbols-outlined">arrow_back</span>
          ABOUT ME
        </Link>
        <Link className="nav-link" to="/projects" id="projects">
          PROJECTS
          <span className="material-symbols-outlined">arrow_downward</span>
        </Link>
        <Link className="nav-link" to="/contact" id="contact">
          CONTACT ME
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
