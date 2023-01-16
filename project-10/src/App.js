import './App.css'
import {Card} from './Card'
import React, {useState} from 'react';


function App() {

    const defaultState = {
        people: 0, bill: 0, tipPercentage: null, totalPerPerson: "0.00", tipPerPerson: "0.00"
    }

    const [state, setState] = useState(defaultState)

    function setAmounts(newState) {

        if (newState.people > 0) {

            if (newState.bill > 0) {
                setState(prevState => {
                    return {...prevState, totalPerPerson: newState.bill / newState.people}
                })
            }

        }

    }

    return (
        <>
            <Card
                totalDivided={state.totalPerPerson}
                tipDivided={"0.00"}

                setPeople={e => {
                    let newState = setState(prevState => {
                        return {...prevState, people: parseInt(e.target.value)}
                    })
                    setAmounts(newState)
                }
                }

                setBill={e => {
                    let newState = setState(prevState => {
                        return {...prevState, bill: parseInt(e.target.value)}
                    })
                    setAmounts(newState)
                }
                }

            />
        </>
    )
}

export default App;
