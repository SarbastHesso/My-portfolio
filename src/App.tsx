import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import Skills from "./pages/Skills";

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="skills" element={<Skills />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
