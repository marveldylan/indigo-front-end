import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { GetUserById } from "../services/UserServices";

const Follow = ({ item, followers, user, userAttribute, updateFunction, followUserFunction, unfollowUserFunction }) => {
    

    let { id }   = useParams()

    const [, setCurrentUser] = useContext(UserContext)

    const [following, setFollowing] = useState(false)
    const [followCount, setFollowCount] = useState()
    const [userArray,] = useState(userAttribute)

    const handleUser = async (id) => {
        const data = await GetUserById(id)
        setCurrentUser(data.user)
        console.log(user)
    }

    const handleClick = () => {
        if(following) {
            // unfollow
            let newFollowCount = parseInt(parseInt(followers) - 1)
            setFollowing(false)
            console.log(newFollowCount, 'newfollowcount')
            setFollowCount(newFollowCount)
            for(let i = 0 ; i < userArray.length; i++) {
                if(userArray[i] === id.toString()) {
                    unfollowUserFunction(user._id, id)
                }
            }
        } else {
            // follow
            let newFollowCount = parseInt(parseInt(followers) + 1)
            setFollowing(true)
            setFollowCount(newFollowCount)
            followUserFunction(user._id, id)
        }
        console.log(updateFunction)
        updateFunction(id, followCount)
        // call user
        handleUser(user._id)


    }

    useEffect(()=> {
        const checkFollowStatus = () => {
            userAttribute.forEach((item)=>{
                if(item === id.toString()) {
                    setFollowing(true)
                }
            })

        }
        checkFollowStatus()
    }, [])


    return (
        <div className="Follow-container">
            <div className="Follow-count-container">
                <h4>Followers: {followers}</h4>
            </div>
            {
                following ?
                    <button className="Follow-btn" onClick={()=>handleClick()}>Unfollow</button>
                :   <button className="Follow-btn" onClick={()=>handleClick()}>Follow</button>
            }
            
        </div>
    )

}

export default Follow