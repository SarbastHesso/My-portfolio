import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [animationClass, setAnimationClass] = useState("slide-in-right");

  const handleAnimationEnd = () => {
    setAnimationClass("");
  };

  return (
    <div
      className={`contact ${animationClass}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="container">Contact</div>
    </div>
  );
};

export default Contact;
