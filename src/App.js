import React, { useState } from "react"
import './App.css';
import Bio from "./Components/Bio.js";
import Skills from "./Components/Skills.js";
import Footer from "./Components/Footer.js";
import Portfolio from "./Components/Portfolio";
import Logo from "./Components/Logo";

function App() {
  const [yDis, setYDis] = useState(5)

  function myFunction() {

    var elmnt = document.getElementById("appHome")
    setYDis(elmnt.scrollTop)
    console.log(yDis)
  }



  return (
    <div >
      <div id="appHome" onScroll={() => myFunction()}>
        <Logo />
        <Bio />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
