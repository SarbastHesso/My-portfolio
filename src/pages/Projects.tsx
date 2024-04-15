import { Link } from "react-router-dom";
import "./Porjects.css";

const Projects = () => {
  const projects = [
    {
      link: "https://sarbasthesso.github.io/All-HTML-CSS/",
      text: "HTML & CSS",
      icon: ["fa-brands fa-html5", "fa-brands fa-css3-alt"],
    },
    {
      link: "https://sarbasthesso.github.io/All-JAVASCRIPT/",
      text: "JAVASCRIPT",
      icon: ["fa-brands fa-js"],
    },
    {
      link: "",
      text: "REACT",
      icon: ["fa-brands fa-react"],
    },
    {
      link: "",
      text: "VUE",
      icon: ["fa-brands fa-vuejs"],
    },
    {
      link: "",
      text: "ANGULAR",
      icon: ["fa-brands fa-angular"],
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
                  <div className="title">
                    <i className="fa-regular fa-hand-point-right"></i>
                    <p className="text">{item.text}</p>
                  </div>
                  <div className="icons">
                    <i className={item.icon[0]}></i>
                    <i className={item.icon[1]}></i>
                  </div>
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
