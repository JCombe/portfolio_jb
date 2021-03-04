import React, { useEffect, useState } from 'react'
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';


import "./Logo.css"

const Logo = ({ yValue }) => {
    const [IsShownL, setIsShownL] = useState(false)
    const [onBtnL, setOnBtnL] = useState(false)
    const [IsShownM, setIsShownM] = useState(false)
    const [onBtnM, setOnBtnM] = useState(false)


    function btnState() {
        if (IsShownL === true) {
            onBtnL ? console.log(onBtnL) :
                setTimeout(() => {
                    setIsShownL(false)
                }, 1000)

        } else if (IsShownM === true) {
            onBtnM ? console.log(onBtnM) :
                setTimeout(() => {
                    setIsShownM(false)
                }, 1000)
        }
    }


    return (
        <div className="logo">

            <div id="stripeL" className="stripeL" style={{ height: `${yValue + 544}px` }}
                onMouseEnter={() => setIsShownL(true)}
                onMouseLeave={() => btnState()}
            >
                {IsShownL && (
                    <Grow in={IsShownL} style={{ transitionDuration: "2000ms" }}
                    >
                        <button className="bioBtnContact btnHover" onMouseEnter={() => setOnBtnL(true)} onMouseLeave={() => setTimeout(() => {
                            setIsShownL(false)
                        }, 1000)}>
                            Contact Me
                        </button>
                    </Grow>
                )}
            </div>
            <div id="stipeM" className="stripeM" style={{ height: `${yValue + 444}px` }}
                onMouseEnter={() => setIsShownM(true)}
                onMouseLeave={() => setTimeout(() => {
                    setIsShownM(false)
                }, 1000)}
            >
                {IsShownM && (
                    <Grow in={IsShownM}>
                        <button className="bioBtnRes btnHover" onMouseEnter={() => setOnBtnM(true)} onMouseLeave={() => setTimeout(() => {
                            setIsShownM(false)
                        }, 1000)}>
                            View Resume
                        </button>
                    </Grow>
                )}
            </div>
            <div className="stripeR" style={{ height: `${yValue + 344}px` }}></div>
        </div>
    )
}

export default Logo
