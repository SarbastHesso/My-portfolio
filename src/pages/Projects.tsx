import  { useState } from "react";
import "./Porjects.css";

const Projects = () => {
  const [animationClass, setAnimationClass] = useState("slide-in-bottom");

  const handleAnimationEnd = () => {
    setAnimationClass(""); 
  };

  return (
    <div
      className={`projects ${animationClass}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="container">Projects</div>
    </div>
  );
};

export default Projects;
