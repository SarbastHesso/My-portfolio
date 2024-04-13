import "./About.css";

const About = () => {
 
  return (
    <div className="about slide-in-left">
      <div className="container">
        <div className="about-sections">
          <section className="profile">
            <p className="profile-text">
              Hi, my name is Sarbast, and I'm deeply passionate about
              technology. My expertise lies in web and frontend development,
              honed through rigorous Higher Vocational Education, intensive boot
              camp training and self-directed learning initiatives. I possess a
              relentless curiosity for exploring emerging technologies and enjoy
              the artistry of creative coding. I am committed to continual
              growth and eagerly embrace opportunities to expand my knowledge
              and skills.
            </p>
            <div className="img-wrapper fadeInImg"></div>
          </section>

          <section className="educations">
            <h3>Educations</h3>
            <div className="educations-sections">
              <section className="education">
                <h4 className="title">Front-end Developer</h4>
                <h4 className="sub-title">Boot camp training</h4>
                <h5 className="info">Lexicon, Stockholm 2023/11 - 2024/04</h5>
                <p className="text">
                  HTML, CSS: Semantic HTML, CSS Syntax, version control Git,
                  flexbox & CSS grid, responsiveness. Agile project methods:
                  Github, SCRUM, agile web development. JavaScript: ECMAScript,
                  Publishing web pages, Code structure, Manipulating the DOM,
                  External services. React: SPA development, SASS, React JS,
                  State Management, Routing.
                </p>
              </section>
              <section className="education">
                <h4 className="title">Web & Front-end Developer</h4>
                <h4 className="sub-title">Higher vocational education</h4>
                <h5 className="info">
                  EC-Utbildning, Västerås 2020/08 – 2022/06
                </h5>
                <p className="text">
                  Specialised theoretical and practical knowledge in frontend
                  and software development. Knowledge and overview of related
                  professional and competence areas such as graphic design,
                  communication and project methods. Knowledge of work processes
                  and quality criteria in theoretical and practical web
                  development. Skills in planning, performing and identifying
                  resources to perform specialist tasks in web development.
                  Skills in solving complex problems in programming. Skills in
                  communicating undertakings and solutions regarding web
                  development in both Swedish and English. Competence to
                  independently process all technical elements required both
                  practically and theoretically, such as HTML, JavaScript and
                  design and in such a way as to lead to further learning and
                  professional development. Competence to monitor software
                  development and web development and complete assigned projects
                </p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
