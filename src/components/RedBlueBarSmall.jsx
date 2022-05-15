import React from "react";
import { useEffect, useState } from "react";

const RedBlueBarSmall = ({ redScore, blueScore, indigo }) => {

    const [redWidth, setRedWidth] = useState(null)

    useEffect(()=> {
        const buildBar = async () => {
            setRedWidth((indigo))
            console.log(redWidth, 'bar width')
            console.log(indigo, 'indigo')
        }
        buildBar()
    }, [redWidth, indigo])

    return (
        <div className="Red-blue-container-small">
            <div className="Blue-bar-small" style={{ width: "100%" }}>
                {blueScore}
                <div className="Red-bar-small" style={{ width: `${redWidth*100}%`}}>
                    <h4>{redScore}</h4>
                </div>
            </div>
            <div className="Indigo-container-small">
                <h3>Indigo: {indigo}</h3>
            </div>

        </div>
    )
}

export default RedBlueBarSmall;