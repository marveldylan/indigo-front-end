import { useEffect, useState } from "react"

const MyAccount = ({user, currentUser, authenticated, handleLogout}) => {


    useEffect(()=> {
        console.log(currentUser)
    })
    return (
        <div className="Main-container">
            <img className="Account-cover-image" src={currentUser.cover_image} />
            <img className="Account-profile-image" src={currentUser.profile_image} />
            <h1>My Account</h1>
            <h2> {currentUser.username}</h2>
            <h3>Name: {currentUser.first_name} {currentUser.last_name}</h3>
            <h4>Followers: {currentUser.followers.length}</h4>
            <h4>Following: {currentUser.following.length}</h4>
            <h2>About:</h2>
            <h2>Contact:</h2>
            <h3>email: {currentUser.email}</h3>
            <h3>My Groups</h3>
                {/* map groups */}
            <h3>My Channels</h3>
            <h4>Created Channels</h4>
                            {/* map channels */}
            <h4>Subscribed Channels</h4>
                            {/* map channels */}
            <h3>My Posts</h3>
                {/* map posts */}

    </div>
    )
}

export default MyAccount