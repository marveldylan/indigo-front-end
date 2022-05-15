import React from "react";
import { useEffect, useState } from "react";

const RedBlueBar = ({ id, redScore, blueScore, indigo, updateFunction }) => {

    const [redWidth, setRedWidth] = useState(null)

    const [red, setRed] = useState(redScore)
    const [blue, setBlue] = useState(blueScore)
    const [indigoScore, setIndigoScore] = useState(indigo)

    const handleClick = async (color) => {
        if(color === 'blue') {
            let newBlue = blue + 1
            setBlue(newBlue)
        } else if (color === 'red') {
            let newRed = red + 1
            setRed(newRed)
        }
        setIndigoScore((blueScore / redScore).toFixed(2))
        await updateFunction(id, red, blue, indigoScore)
    }


    useEffect(()=> {
        const buildBar = async () => {
            setRedWidth((indigo))
            console.log(redWidth, 'bar width')
            console.log(indigo, 'indigo')
        }
        buildBar()
    }, [redWidth, red, blue, indigoScore])

    return (
        <div className="Bar-large">
            <div className="Red-blue-container">
                <div className="Bar-click-large Blue" onClick={()=>handleClick('blue')}>
                    <h5 className="Bar-score-large">{blueScore}</h5>
                </div>
                <div className="Blue-bar" style={{ width: "100%" }}>
                    <div className="Red-bar" style={{ width: `${redWidth*100}%`}}>
                    </div>
                </div>
                <div className="Bar-click-large Red" onClick={()=>handleClick('red')}>
                    <h5 className="Bar-score-large">{redScore}</h5>
                </div>
            </div>
            <div className="Indigo-container">
                <h5 className="Indigo-large">Indigo: {indigo}</h5>
            </div>
        </div>
    )
}

export default RedBlueBar;