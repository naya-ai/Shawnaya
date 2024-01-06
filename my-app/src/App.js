import React from "react";
import Intro from "./components/Intro.js";
import Experience from "./components/Experience.js";
import About from "./components/About.js";
import Credits from "./components/Credits.js";
import NavBar from "./components/NavBar.js";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App;