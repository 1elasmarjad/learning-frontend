import React, {Component} from "react";
import './Card.css'
import {TipPercentButton, CustomTipButton} from "./Button";

export const Card = (props) => {

    const totalDivided = props.totalDivided
    const tipDivided = props.tipDivided

    return (
        <>

            <div className="Container">

                <div className="Amount">

                    <label htmlFor="billAmount">Bill</label>

                    <div className="InputBox">
                        <div className="InputIcon">$</div>
                        <input type="number" name="billAmount"/>
                    </div>

                </div>

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

                    <label htmlFor="peopleNumber">Number Of People</label>

                    <div className="InputBox">
                        <div className="InputIcon">$</div>
                        <input type="number" name="numberOfPeople"/>
                    </div>

                </div>

                <div className="ResultContainer">

                    <div className="Results">

                        <div className="Result">

                            <div className="Left">
                                <h2>Tip Amount</h2>
                                <p>/ person</p>
                            </div>

                            <div className="Right">
                                <h1>${tipDivided ? (tipDivided) : ("0.00")}</h1>
                            </div>

                        </div>

                        <div className="Result">

                            <div className="Left">
                                <h2>Total</h2>
                                <p>/ person</p>
                            </div>

                            <div className="Right">
                                <h1>
                                    ${totalDivided ? (totalDivided) : ("0.00")}
                                </h1>
                            </div>

                        </div>

                        <div className="ResetButton">

                            <h1>RESET</h1>

                        </div>

                    </div>

                </div>


            </div>

        </>
    )
}

