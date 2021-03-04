import React, { useEffect, useState } from "react"
import './App.css';
import Bio from "./Components/Bio.js";
import Skills from "./Components/Skills.js";
import Footer from "./Components/Footer.js";
import Portfolio from "./Components/Portfolio";
import Logo from "./Components/Logo";

function App() {
  const [yValue, setYValue] = useState(0)




  return (

    <div >
      <div id="app" style={{ height: "100vh", overflow: "auto", scrollBehavior: "smooth" }} onScroll={(e) => setYValue(e.target.scrollTop)}>
        <Logo yValue={yValue} />
        <Bio />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
