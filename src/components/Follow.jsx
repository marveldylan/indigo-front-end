import { useState, useEffect, useContext } from "react"


const Follow = ({user, item}) => {

    const handleClick = () => {

    }

    useEffect(()=> {

    }, [])


    return (
        <div className="Follow-container">
            {/* ternary her for follow vs unfollow */}
            <button onClick={()=>handleClick()}>Follow</button>
            <button onClick={()=>handleClick()}>Unfollow</button>
        </div>
    )

}

export default Follow