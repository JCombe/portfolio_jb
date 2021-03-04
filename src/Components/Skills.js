import React from 'react'
import "./Skills.css"
import webDevIcn from '../Assets/webDevIcn.png'
import sketchIcn from '../Assets/sketchIcn.png'
import { skillArr } from "../Assets/Data"
import SkillBox from './SkillBox';

function Skills() {
    return (
        <div className="skillsBG">
            <h2 className="stageHeadline"> Skills/ Portfolio </h2>

            <div className="gridBox">
                {skillArr.map((item) =>
                    <div key={item.titel} className="gridItem">
                        <SkillBox item={item} />
                    </div>
                )}

            </div>


        </div>
    )
}

export default Skills
