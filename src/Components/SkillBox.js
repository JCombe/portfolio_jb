import React from 'react'
import { Link } from 'react-router-dom';
import "./SkillBox.css"
import webDevIcn from './webDevIcn.png'

function SkillBox() {
    return (


        <div className="skillBox">
            <div className="imgBox">
                <img src={webDevIcn} className="imgPos" />
            </div>

            <div className="skillBoxTitle">Web Dev</div>
            <div className="skillBoxTxt">Developement of modern web-applications and API's using HTML5, JavaScript, CSS</div>
        </div>
    )
}

export default SkillBox