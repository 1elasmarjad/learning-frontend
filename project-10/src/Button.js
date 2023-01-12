import React from "react";
import './Button.css'


export const TipPercentButton = (props) => {
    return (
        <>
            <div className="Button Regular">
                <h1 className="Text">{props.text}</h1>
            </div>
        </>
    )
}


export const CustomTipButton = (props) => {
    return (
        <>
            <div className="Button Custom">
                <h1 className="Text">{props.text}</h1>
            </div>
        </>
    )
}



