import { useEffect, useState } from "react";
import "./Skills.css";

const Skills = () => {

  const skills: string[] = [
    "HTML",
    "CSS",
    "SASS",
    "BOOTSTRAP",
    "JAVASCRIPT",
    "REACT",
    "VUE",
    "ANGULAR",
    "TYPESCRIPT",
    "NODE.JS",
    "MONGO DB",
    "FIREBASE",
    "GIT",
    "GITHUB",
    "SCRUM",
    "TRELLO",
    "ADOBE XD",
    "FIGMA",
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="skills slide-in-top">
      <div className="container">
        <ul className="skill-list">
          {skills.map((skill, index) => {
            return (
              <li
                key={index}
                className={`skill ${isVisible ? "flashing" : ""}`}
                style={{ animationDelay: `${index * 0.8}s` }}
              >
                <p>{skill}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
