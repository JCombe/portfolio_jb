import React from "react"
import './App.css';
import Bio from "./Components/Pages/Bio.js";
import Skills from "./Components/Pages/Skills.js";
import Footer from "./Components/Pages/Footer.js";

function App() {
  return (
    <div className="mydiv">
      <Bio />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
