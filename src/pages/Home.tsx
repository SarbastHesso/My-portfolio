import { Link } from "react-router-dom";
import Canvas from "../components/Canvas";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Canvas />
      <h1>SARBAST HESSO</h1>
      <h4>FRONT-END DEVELOPER</h4>
      <nav className="nav-links">
        <Link className="nav-link" to="/about">ABOUT ME</Link>
        <Link className="nav-link" to="/projects">PROJECTS</Link>
        <Link className="nav-link" to="/contact">CONTACT ME</Link>
      </nav>
    </div>
  );
};

export default Home;
