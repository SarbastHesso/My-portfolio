import { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [animationClass, setAnimationClass] = useState("slide-in-top");

  const handleAnimationEnd = () => {
    setAnimationClass(""); 
  };

  return (
    <div
      className={`skills ${animationClass}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="container">Skills</div>
    </div>
  );
};

export default Skills;
