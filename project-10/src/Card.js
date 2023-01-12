import React, {Component} from "react";
import './Card.css'
import {TipPercentButton, CustomTipButton} from "./Button";

class Card extends Component {
    render() {
        return (
            <>

                <div className="Container">

                    <div className="ButtonsContainer">

                        <h1 className="Title">Select Tip %</h1>

                        <div className="Buttons">

                            <TipPercentButton text="5%"/>
                            <TipPercentButton text="10%"/>
                            <TipPercentButton text="15%"/>
                            <TipPercentButton text="25%"/>
                            <TipPercentButton text="50%"/>
                            <CustomTipButton text="Custom"/>

                        </div>

                    </div>

                    <div className="PeopleContainer">

                        <h1 className="Title">Number of People</h1>

                    </div>

                    <div className="ResultContainer">

                    </div>



                </div>

            </>
        )
    }
}

export default Card;