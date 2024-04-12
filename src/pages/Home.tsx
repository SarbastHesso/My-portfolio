import Canvas from "../components/Canvas";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {

  return (
    <div className="home fade-in">
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
