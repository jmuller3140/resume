import React from "react";
import "./introText.css";


const IntroText = ({text}) => {
    return (
        <div className="IntroText__Container">
            {text}
        </div>
    )
}

export default IntroText