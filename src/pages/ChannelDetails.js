import ExploreNav from "../components/ExploreNav";
import Follow from "../components/Follow";
import RedBlueBar from "../components/RedBlueBar";
import Posts from "../components/Posts";
import CreatePost from "../components/CreatePost";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GetChannelById } from "../services/ChannelServices";
import { FollowUnfollowChannel } from "../services/ChannelServices";
import { UnfollowChannelUser } from "../services/UserServices";
import { FollowChannelUser } from "../services/UserServices";
import { GetPostsByChannel } from "../services/PostServices";
import { UserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { DeleteChannel } from "../services/ChannelServices";
import { UpdateIndigoChannel } from "../services/ChannelServices";




const ChannelDetails = () => {

    let navigate = useNavigate()
    const userNavigate = () => {
        navigate(`/users/${channel.user_id._id}`)
    }

    let { id } =useParams()

    const [user, setUser] = useContext(UserContext)
    

    const [channel, setChannel] = useState({})
    const [username, setUsername] = useState('')
    const [userId, setUserId] = useState('')
    const [showCreatePost, setShowCreatePost] = useState(false)
    const [refresh, setRefresh] = useState(false)

    const channelDisband = async () => {
        await DeleteChannel(channel._id)
        navigate('/library')
    }

    const showCreate = () => {
        showCreatePost ? setShowCreatePost(false) : setShowCreatePost(true)
    }



    useEffect(()=>{
        console.log(user, 'user')
        const handleChannel = async () => {
            const data = await GetChannelById (id)
            setChannel(data.channel)
            setUsername(data.channel.user_id.username)
            setUserId(data.channel.user_id._id)
        }
        
        handleChannel()
    }, [refresh])

    return (
        <div className="Secondary-page-details">
            <ExploreNav />
            <div className="Secondary-page-header">
                <img className="Secondary-page-header-image" src={channel.cover_image} />
                <RedBlueBar id={channel._id} redScore = {channel.red_score} blueScore = {channel.blue_score} indigo= {channel.indigo} updateFunction={UpdateIndigoChannel} />
                <div className="Secondary-page-info">
                    <div className="Secondary-page-about">
                        <div className="Secondary-page-name">
                            <h3>{channel.name}</h3>
                        </div>
                        <div className="Secondary-page-username">
                            <h6 className="Username" onClick={()=>userNavigate()}>Created By: <span className="Highlighted">{username}</span></h6>
                            {
                                (userId === user._id) ?
                                <p  className="Disband" onClick={()=>channelDisband()}>Disband Channel</p>
                                : ''
                            }
                        </div>
                    </div>
                    <Follow 
                        item={channel}
                        followers={channel.follower_counter}
                        user={user} 
                        userAttribute={user.subscribed_channels} 
                        updateFunction={FollowUnfollowChannel} 
                        followUserFunction ={FollowChannelUser} 
                        unfollowUserFunction ={UnfollowChannelUser}
                    />
                </div>
            </div>
            <div className="Post-list-container">
                <h3 className="Post-name">Posts</h3>
                {
                    userId === user._id ?
                    <div>
                        <button className="Post-button "onClick={()=>showCreate()}>New Post</button>
                    </div>
                    : ''
                }
                {
                    showCreatePost ?
                    <CreatePost channel={channel} user={user} setShowCreatePost={setShowCreatePost} refresh={refresh} setRefresh={setRefresh}/>
                    : ''
                }
                <Posts id = {id} getPosts={GetPostsByChannel} user={user}/>
            </div>
        </div>
    )
}

export default ChannelDetails