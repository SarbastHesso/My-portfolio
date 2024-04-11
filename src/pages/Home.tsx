import Canvas from "../components/Canvas";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home fade-in ">
      <Canvas />
      <div className="container">
        <div className="title">
          <h1>SARBAST HESSO</h1>
          <h4>FRONT-END DEVELOPER</h4>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
