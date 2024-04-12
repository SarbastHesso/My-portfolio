import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
    const location = useLocation();
  return (
    <div className={`header ${location.pathname === "/" ? "hide" : ""}`}>
      <Link to="/" className="back">
        <i className="fa-solid fa-house"></i>
      </Link>
      <Navbar />
    </div>
  );
}

export default Header