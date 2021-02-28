import React from 'react'
import "./Bio.css"
import jb from '../../Assets/jb.JPG'




function Bio() {
    return (
        <>
            <div className="bioPageBox">

                <div className="image__container">

                    <img src={jb} alt="Jcombe" className="portraitBox" />
                </div>
                <div className="textCont">
                    <p className="f1">
                        Julian Biscombe
                        </p>
                    <p className="f12">
                        Software Developer
                        </p>
                    <p className="f3 margin1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>

                    <button className="bioBtnContact btnWidth">
                        Contact Me
                        </button>

                    <button className="bioBtnRes btnWidth">
                        View Resume
                    </button>
                </div>
            </div>
        </>
    )
}

export default Bio
