import React from 'react'
import "./Portfolio.css"
import paarFitDashB from "../Assets/paarFitDashB.jpeg"

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolioInfo">
                <div className="portfolioTitle">PaarFit</div>
                <ul className="portfolioLi">
                    <li>Designing and building the Front-End using <span>Javascript</span> framework <span>React Js</span> and the Css framework <span>Tailwind Css</span>.</li>
                </ul>
            </div>
            <div className="portfolioImgContainer">
                <img className="portfolioImg" src={paarFitDashB} alt="" />
            </div>
        </div>
    )
}

export default Portfolio
