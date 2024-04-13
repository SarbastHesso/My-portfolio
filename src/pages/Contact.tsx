import { Link } from "react-router-dom";
import "./Contact.css";
import { useEffect, useState } from "react";

const Contact = () => {

  const contactList = [
    {
      link: "mailto:sarbast.hesso@gmail.com",
      icon: "fa-solid fa-envelope",
      text: "sarbast.hesso@gmail.com",
    },
    {
      link: "tel:0704453050",
      icon: "fa-solid fa-mobile-screen-button",
      text: "070 445 30 50",
    },
    {
      link: "https://www.google.se/maps/place/St%C3%A5ngj%C3%A4rnsgatan+16,+724+77+V%C3%A4ster%C3%A5s/@59.5995343,16.482953,17z/data=!3m1!4b1!4m5!3m4!1s0x465e63d713fba26d:0xe59056bbcefd05f6!8m2!3d59.5995343!4d16.485147?hl=en&authuser=0",
      icon: "fa-solid fa-map-location",
      text: "Stångjärnsgatan 16, Västerås, Sweden",
    },
    {
      link: "https://www.linkedin.com/in/sarbast-hesso-5a4768161/",
      icon: "fa-brands fa-linkedin",
      text: "LinkedIn",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="contact slide-in-right">
      <div className="container">
        <div className="contact-sections">
          <section className="img-wrapper fadeInImg">
            <img src="../assets/images/undraw_profile_re_4a55.svg" alt="" />
          </section>
          <section className="contact-list">
            {
              contactList.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.link}
                    className="contact-item"
                    target="blank"
                  >
                    <i
                      className={`${item.icon} ${isVisible ? "flashing-icon" : ""}`}
                      style={{ animationDelay: `${index * 1.5}s` }}
                    ></i>
                    <p className="text">{item.text}</p>
                  </Link>
                );
              })
            }
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
