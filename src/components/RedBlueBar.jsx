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
        <div className="Red-blue-container">
            <div className="Blue-click-large" onClick={()=>handleClick('blue')}>
                <h3>Click Blue</h3>
            </div>
            <div className="Blue-bar" style={{ width: "100%" }}>
                {blueScore}
                <div className="Red-bar" style={{ width: `${redWidth*100}%`}}>
                    <h4>{redScore}</h4>
                </div>
            </div>
            <div className="Red-click-large" onClick={()=>handleClick('red')}>
                <h3>Click Red</h3>
            </div>
            <div className="Indigo-container">
                <p className="Indigo-large">Indigo: {indigo}</p>
            </div>

        </div>
    )
}

export default RedBlueBar;