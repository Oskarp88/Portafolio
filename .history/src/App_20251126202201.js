import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <About title="About me" id="about" />
        <Skills title="My coding journey" id="skills" />
        <MyWork title="My Work" id="work" />
        <Contact title="Get in touch" id="contact" dark={false} />
      </main>
    </div>
  );
}

export default App;
