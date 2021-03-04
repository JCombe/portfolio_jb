import React from 'react'
import "./SkillBox.css"

function SkillBox({ item }) {
    return (


        <div className="skillBox">
            <div className="imgBox">
                <img src={item.img} className="imgPos" />
            </div>

            <div className="skillBoxTitle">{item.titel}</div>
            <div className="skillBoxTxt">{item.description}</div>
        </div>
    )
}

export default SkillBox