import React from 'react'
import { Link } from 'react-router-dom';
import "./Skills.css"
import webDevIcn from '../webDevIcn.png'
import sketchIcn from '../sketchIcn.png'

function Skills() {
    return (
        <div className="skillsBG">
            <h2 className="stageHeadline"> Skills/ Portfolio </h2>

            <div className="gridBox">
                <div className="skillBox">
                    <div className="imgBox">
                        <img src={webDevIcn} className="imgPos" />
                    </div>

                    <div className="skillBoxTitle">Web Dev</div>
                    <div className="skillBoxTxt">Developement of modern web-applications and API's using HTML5, JavaScript, CSS</div>
                </div>

                <div className="skillBox">
                    <div className="imgBox">
                        <img src={sketchIcn} className="imgPos" />
                    </div>

                    <div className="skillBoxTitle">Grafic Design</div>
                    <div className="skillBoxTxt">Design of aesthetic and user-friendly interfaces using Sketch, Figma</div>
                </div>
            </div>
        </div>
    )
}

export default Skills
