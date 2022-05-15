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
            <h1>My Profile</h1>
            <button onClick={()=>editProfile()}>Edit Profile</button>
            <h2> {currentUser.username}</h2>
            <h3>Name: {currentUser.first_name} {currentUser.last_name}</h3>
            <h4>Followers: {currentUser.followers.length}</h4>
            <h4>Following: {currentUser.following.length}</h4>
            <h2>About:</h2>
            <h2>Contact:</h2>
            <h3>email: {currentUser.email}</h3>

    </div>
    )
}

export default MyAccount