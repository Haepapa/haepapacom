import React from "react";
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
      <div className="body">
        <Navbar />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
