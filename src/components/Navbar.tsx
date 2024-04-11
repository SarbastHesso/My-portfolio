import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about" id="about">
        <span className="material-symbols-outlined">arrow_back</span>
        ABOUT ME
      </Link>
      <Link className={`nav-link ${location.pathname === "/skills" ? "active" : ""}`} to="/skills" id="skills">
        SKILLS
        <span className="material-symbols-outlined">arrow_upward</span>
      </Link>
      <Link className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`} to="/projects" id="projects">
        PROJECTS
        <span className="material-symbols-outlined">arrow_downward</span>
      </Link>
      <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact" id="contact">
        CONTACT ME
        <span className="material-symbols-outlined">arrow_forward</span>
      </Link>
    </nav>
  );
}

export default Navbar