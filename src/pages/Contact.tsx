import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {

  return (
    <div className="contact slide-in-right">
      <div className="container">
        <div className="contact-sections">
          <section className="img-wrapper ">
            <img src="../assets/images/undraw_profile_re_4a55.svg" alt="" />
          </section>
          <section className="contact-list">
            <Link
              to="mailto:sarbast.hesso@gmail.com"
              className="contact-item"
              target="blank"
            >
              <i className="fa-solid fa-envelope"></i>
              <p className="text">sarbast.hesso@gmail.com</p>
            </Link>
            <Link to="tel:0704453050" className="contact-item" target="blank">
              <i className="fa-solid fa-mobile-screen-button"></i>
              <p className="text">070 445 30 50</p>
            </Link>
            <Link
              to="https://www.google.se/maps/place/St%C3%A5ngj%C3%A4rnsgatan+16,+724+77+V%C3%A4ster%C3%A5s/@59.5995343,16.482953,17z/data=!3m1!4b1!4m5!3m4!1s0x465e63d713fba26d:0xe59056bbcefd05f6!8m2!3d59.5995343!4d16.485147?hl=en&authuser=0"
              className="contact-item"
              target="blank"
            >
              <i className="fa-solid fa-map-location"></i>
              <p className="text">Stångjärnsgatan 16, Västerås, Sweden</p>
            </Link>
            <Link
              to="https://www.linkedin.com/in/sarbast-hesso-5a4768161/"
              className="contact-item"
              target="blank"
            >
              <i className="fa-brands fa-linkedin"></i>
              <p className="text">LinkedIn</p>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
