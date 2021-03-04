import React from 'react'
import "./Logo.css"

const Logo = ({ scrollHeight }) => {

    const logoHeight = 544 + scrollHeight



    return (
        <div className="logo">
            <div className="stripeL" style={{ height: `${logoHeight}px` }}>
                <button className="bioBtnContact btnHover">
                    Contact Me
                        </button>
            </div>
            <div className="stripeM">
                <button className="bioBtnRes btnHover">
                    View Resume
                    </button>
            </div>
            <div className="stripeR"></div>
        </div>
    )
}

export default Logo
