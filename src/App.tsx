import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Inter"
        rel="stylesheet"
      ></link>
      <Navbar />
      <div className="body">
        <span id="about">
          <About />
        </span>
        <span id="projects">
          <Projects />
        </span>
        <span id="contact">
          <Contact />
        </span>
      </div>
    </>
  );
}

export default App;
