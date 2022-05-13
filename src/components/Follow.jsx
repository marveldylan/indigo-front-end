import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

const Follow = ({ item, user, userAttribute, updateFunction, followUserFunction, unfollowUserFunction }) => {
    

    let { id }   = useParams()

    const [following, setFollowing] = useState(false)
    const [followCount, setFollowCount] = useState(item.follower_counter)
    const [userArray, setUserArray] = useState(userAttribute)

    const handleClick = () => {
        console.log(id, 'id')
        if(following) {
            // unfollow
            setFollowing(false)
            setFollowCount(followCount - 1)
            for(let i = 0 ; i < userArray.length; i++) {
                if(userArray[i] === id.toString()) {
                    console.log(unfollowUserFunction, 'unfollow user function')
                    unfollowUserFunction(user._id, id)

                }
            }
        } else {
            // follow
            setFollowing(true)
            setFollowCount(followCount + 1)
            console.log(user._id, 'userid')
            console.log(followUserFunction, 'follow user function')
            followUserFunction(user._id, id)
        }
        updateFunction(id, followCount)

    }

    useEffect(()=> {
        const checkFollowStatus = () => {
            userAttribute.forEach((item)=>{
                if(item === id) {
                    setFollowing(true)
                }
            })
            console.log(following, 'follow status')
            console.log(user, 'user')
            console.log(userAttribute)
            console.log(id)

        }
        checkFollowStatus()
    }, [])


    return (
        <div className="Follow-container">
            {
                following ?
                    <button onClick={()=>handleClick()}>Unfollow</button>
                :   <button onClick={()=>handleClick()}>Follow</button>
            }

            
        </div>
    )

}

export default Follow