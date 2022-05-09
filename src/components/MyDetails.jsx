import { useState,useEffect } from "react";


const MyDetails = ({ currentUser }) => {


    return (
        <div className="My-details-container">
            <h4>{currentUser.username}</h4>
        </div>
    )
}

export default MyDetails;