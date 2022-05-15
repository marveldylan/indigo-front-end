import ExploreNav from "../components/ExploreNav";
import Channels from "../components/Channels";
import Follow from "../components/Follow";
import RedBlueBar from "../components/RedBlueBar";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetGroupById } from "../services/GroupServices";
import { FollowUnfollowGroup } from "../services/GroupServices";
import { UnfollowGroupUser } from "../services/UserServices";
import { FollowGroupUser } from "../services/UserServices";
import { UserContext } from "../contexts/userContext"; 
import { GetChannelsByGroup } from "../services/ChannelServices";
import { DeleteGroup } from "../services/GroupServices";
import { UpdateIndigoGroup } from "../services/GroupServices";




const GroupDetails = () => {

    let { id } =useParams()
    let navigate = useNavigate()
    const userNavigate = () => {
        navigate(`/users/${group.user_id._id}`)
    }

    const [user, setUser] = useContext(UserContext)
    const [group, setGroup] = useState({})
    const [username, setUsername] = useState('')
    const [userId, setUserId] = useState('')

    const groupDisband = async () => {
        await DeleteGroup(group._id)
        navigate('/library')
    }


    useEffect(()=>{
        console.log(user, 'user')
        const handleGroup = async () => {
            const data = await GetGroupById (id)
            setGroup(data.group)
            setUsername(data.group.user_id.username)
            setUserId(data.group.user_id._id)
        }
        
        handleGroup()
    }, [user.subscribed_groups])

    return (
        <div className="Group-details">
            <ExploreNav />
            <div className="Group-header">
                <img className="Group-header-image" src={group.cover_image} />
                <RedBlueBar id={group._id} redScore = {group.red_score} blueScore = {group.blue_score} indigo= {group.indigo} updateFunction={UpdateIndigoGroup}/>
                <h3>{group.name}</h3>
                <h6 className="Username" onClick={()=>userNavigate()}>Created By: {username}</h6>
                {
                    (userId === user._id) ?
                    <button onClick={()=>groupDisband()}>Disband Group</button>
                    : ''
                }
                <Follow 
                    item={group}
                    followers={group.follower_counter}
                    user={user} 
                    userAttribute={user.subscribed_groups} 
                    updateFunction={FollowUnfollowGroup} 
                    followUserFunction ={FollowGroupUser} 
                    unfollowUserFunction ={UnfollowGroupUser}
                />
            </div>
            <div className="Channel-container">
                <h3>Channels</h3>
                <Channels id = {id} getChannels={GetChannelsByGroup}/>
            </div>
        </div>
    )
}

export default GroupDetails