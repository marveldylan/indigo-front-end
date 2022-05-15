import Follow from "../components/Follow";
import RedBlueBar from "../components/RedBlueBar";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FollowUnfollowChannel } from "../services/ChannelServices";
import { UnfollowChannelUser } from "../services/UserServices";
import { FollowChannelUser } from "../services/UserServices";
import { UserContext } from "../contexts/userContext";
import { UpdateIndigoChannel } from "../services/ChannelServices";

const ChannelDetails = ({ channel }) => {

    let navigate = useNavigate()

    const [user, setUser] = useContext(UserContext)

    const handleClick = () => {
        navigate(`/channels/${channel._id}`)
    }

    return (
        <div className="Channel-details-container">
                <img className="Channel-header-image" src={channel.cover_image} />
                <h3>{channel.name}</h3>
                {/* <Follow 
                    item={channel}
                    followers={channel.follower_counter}
                    user={user} 
                    userAttribute={user.subscribed_channels} 
                    updateFunction={FollowUnfollowChannel} 
                    followUserFunction ={FollowChannelUser} 
                    unfollowUserFunction ={UnfollowChannelUser}
                /> */}
                <RedBlueBar id={channel._id} redScore = {channel.red_score} blueScore = {channel.blue_score} indigo= {channel.indigo} updateFunction={UpdateIndigoChannel} />
                <button onClick={()=>handleClick()}>Go To Channel</button>
        </div>
    )
}

export default ChannelDetails