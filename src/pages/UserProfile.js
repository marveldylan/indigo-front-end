import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../contexts/userContext"
import { GetUserById } from "../services/UserServices"
import Follow from "../components/Follow"
import { FollowUser, UnfollowUser } from "../services/UserServices"
import RedBlueBar from "../components/RedBlueBar"

const UserProfile = () => {

    let { id } = useParams()

    const [currentUser, setCurrentUser] = useContext(UserContext)

    const dummyFunction = () => {
        console.log('hey, dummy')
    }

    const [user, setUser] = useState({})
    const [following, setFollowing] = useState(null)


    useEffect(()=> {
        const handleUser = async () => {
            const data = await GetUserById(id)
            setUser(data.user)
            setFollowing(data.user.followers.length)
        }
        handleUser()
    }, [])

    return (
        <div className="Main-container">
            <div className="Profile-header">
                <img className="Account-cover-image" src={user.cover_image} />
                <img className="Account-profile-image" src={user.profile_image} />
                <RedBlueBar redScore={user.red_score} blueScore={user.blue_score} indigo={user.indigo} />
                <h4 className="Profile-name">{user.username}</h4>
            </div>
            <div className="Profile-container">
                <h5>About: {user.about}</h5>
            </div>
 
        </div>

    )
}

export default UserProfile