import Canvas from "../components/Canvas";
import Navbar from "../components/Navbar";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [animationClass, setAnimationClass] = useState("fade-in");
  const handleAnimationEnd = () => {
    setAnimationClass("");
  };
  return (
    <div className={`home ${animationClass}`} onAnimationEnd={handleAnimationEnd}>
      <Canvas />
      <div className="container">
        <div className="title">
          <h1>SARBAST HESSO</h1>
          <h3>FRONT-END DEVELOPER</h3>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
