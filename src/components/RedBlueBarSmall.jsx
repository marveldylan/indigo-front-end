import React from "react";
import { useEffect, useState } from "react";

const RedBlueBarSmall = ({ id, redScore, blueScore, indigo, updateFunction }) => {

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
        <div className="Red-blue-container-small">
            <div className="Blue-click-small" onClick={()=>handleClick('blue')}>
                <h3>Click Blue</h3>
            </div>
            <div className="Blue-bar-small" style={{ width: "100%" }}>
                <div className="Red-bar-small" style={{ width: `${redWidth*100}%`}}>
                </div>
            </div>
            <div className="Red-click-small" onClick={()=>handleClick('red')}>
                <h3>Click Red</h3>
            </div>
            <div className="Indigo-container-small">
                <p className="Indigo-small">Indigo: {indigo}</p>
            </div>

        </div>
    )
}

export default RedBlueBarSmall;