import ExploreNav from "../components/ExploreNav";
import Follow from "../components/Follow";
import RedBlueBar from "../components/RedBlueBar";
import Posts from "../components/Posts";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GetChannelById } from "../services/ChannelServices";
import { FollowUnfollowChannel } from "../services/ChannelServices";
import { UnfollowChannelUser } from "../services/UserServices";
import { FollowChannelUser } from "../services/UserServices";
import { GetPostsByChannel } from "../services/PostServices";
import { UserContext } from "../contexts/userContext";




const ChannelDetails = () => {

    let { id } =useParams()

    const [user, setUser] = useContext(UserContext)

    const [channel, setChannel] = useState({})



    useEffect(()=>{
        console.log(user, 'user')
        const handleChannel = async () => {
            const data = await GetChannelById (id)
            setChannel(data.channel)
        }
        
        handleChannel()
    }, [user.subscribed_channels])

    return (
        <div className="Channel-details">
            <ExploreNav />
            <div className="Channel-header">
                <img className="Channel-header-image" src={channel.cover_image} />
                <h3>{channel.name}</h3>
                <Follow 
                    item={channel}
                    followers={channel.follower_counter}
                    user={user} 
                    userAttribute={user.subscribed_channels} 
                    updateFunction={FollowUnfollowChannel} 
                    followUserFunction ={FollowChannelUser} 
                    unfollowUserFunction ={UnfollowChannelUser}
                />
                <RedBlueBar redScore = {channel.red_score} blueScore = {channel.blue_score} indigo= {channel.indigo} />
            </div>
            <div className="Post-container">
                <h3>Posts</h3>
                <Posts id = {id} getPosts={GetPostsByChannel}/>
            </div>
        </div>
    )
}

export default ChannelDetails