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
        <div className="Bar-small">
            <div className="Red-blue-container-small">
                <div className="Blue-bar-small" style={{ width: "100%" }} onClick={()=>handleClick('blue')}>
                    <div className="Red-bar-small" style={{ width: `${redWidth*100}%`}} onClick={()=>handleClick('red')}>
                    </div>
                </div>
            </div>
            <div className="Indigo-container-small">
                <h5 className="Indigo-small">Indigo: {indigo}</h5>
            </div>
        </div>
    )
}

export default RedBlueBarSmall;