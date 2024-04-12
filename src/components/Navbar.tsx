import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <Link
        className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
        to="/about"
        id="about"
      >
        <i className="fa-solid fa-arrow-left"></i>
        ABOUT ME
      </Link>
      <Link
        className={`nav-link ${
          location.pathname === "/skills" ? "active" : ""
        }`}
        to="/skills"
        id="skills"
      >
        SKILLS
        <i className="fa-solid fa-arrow-up"></i>
      </Link>
      <Link
        className={`nav-link ${
          location.pathname === "/projects" ? "active" : ""
        }`}
        to="/projects"
        id="projects"
      >
        PROJECTS
        <i className="fa-solid fa-arrow-down"></i>
      </Link>
      <Link
        className={`nav-link ${
          location.pathname === "/contact" ? "active" : ""
        }`}
        to="/contact"
        id="contact"
      >
        CONTACT ME
        <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </nav>
  );
}

export default Navbar