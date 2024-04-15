import { Link } from "react-router-dom";
import "./Porjects.css";

const Projects = () => {
  const projects = [
    {
      link: "https://sarbasthesso.github.io/All-HTML-CSS/",
      text: "HTML & CSS",
    },
    {
      link: "https://sarbasthesso.github.io/All-JAVASCRIPT/",
      text: "JAVASCRIPT",
    },
    {
      link: "",
      text: "REACT",
    },
    {
      link: "",
      text: "VUE",
    },
    {
      link: "",
      text: "ANGULAR",
    },
  ];

  return (
    <div className="projects slide-in-bottom">
      <div className="container">
        <div className="project-list">
          {
            projects.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="project"
                  rel="stylesheet"
                  to={item.link}
                >
                  <i className="fa-regular fa-hand-point-right"></i>
                  <p className="text">{item.text}</p>
                </Link>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
