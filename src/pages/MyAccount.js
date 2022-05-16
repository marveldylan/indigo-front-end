import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import RedBlueBar from "../components/RedBlueBar"

const MyAccount = ({user, currentUser, authenticated, handleLogout}) => {

    let navigate = useNavigate()

    const editProfile = () => {
        navigate(`/edit-profile`)    
    }
    useEffect(()=> {
        console.log(currentUser)
    })
    return (
        <div className="Main-container">
            <img className="Account-cover-image" src={currentUser.cover_image} />
            <img className="Account-profile-image" src={currentUser.profile_image} />
            <RedBlueBar redScore={user.red_score} blueScore={user.blue_score} indigo={user.indigo}/>
            <div className="Account-container">
                <p className="Post-label">My Profile</p>
                <button className="Post-button" onClick={()=>editProfile()}>Edit Profile</button>
                <p className="Post-label"> {currentUser.username}</p>
                <p className="Post-label">Name: {currentUser.first_name} {currentUser.last_name}</p>
                <p className="Post-label">Followers: {currentUser.followers.length}</p>
                <p className="Post-label">Following: {currentUser.following.length}</p>
                <p className="Post-label">About: {currentUser.about}</p>
                <p className="Post-label">Contact:</p>
                <p className="Post-label">email: {currentUser.email}</p>
            </div>

    </div>
    )
}

export default MyAccount