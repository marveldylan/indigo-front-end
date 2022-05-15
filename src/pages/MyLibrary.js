import ItemMap from "../components/ItemMap";
import PostMap from "../components/PostMap";
import UserNav from "../components/UserNav";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { GetGroupById, GetGroupsByUser } from "../services/GroupServices";
import { GetChannelById, GetChannelsByUser } from "../services/ChannelServices";
import { GetPostById, GetPostsByUser } from "../services/PostServices";
import { GetCommentByUser } from "../services/CommentServices";

const MyLibrary = () => {

    const [user, setUser] = useContext(UserContext)

    const [subbedGroups, setSubbedGroups] = useState([])
    const [subbedChannels, setSubbedChannels] = useState([])
    const [userGroups, setUserGroups] = useState([])
    const [userChannels, setUserChannels] = useState([])
    const [savedPosts, setSavedPosts] = useState([])
    const [userPosts, setUserPosts]  = useState([])
    const [comments, setUserComments] = useState([])
    const [showSavedPosts, setShowSavedPosts] = useState(false)
    const [showMyPosts, setShowMyPosts] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const [ update, setUpdate] = useState(false)
    const [refresh, setRefresh] = useState(false)

    const handleRefresh = () => {
        refresh ? setRefresh(false) : setRefresh(true)
    }

    const handleSavedPostsClick = () => {
        showSavedPosts ? setShowSavedPosts(false) : setShowSavedPosts(true)
    }

    const handleMyPostsClick = () => {
        showMyPosts ? setShowMyPosts(false) : setShowMyPosts(true)
    }

    const handleCommentsClick = () => {
        showComments ? setShowComments(false) : setShowComments(true)
    }

    useEffect(()=> {
        const handleSubGroups = async () => {
            let groupArray = []
            await user.subscribed_groups.forEach(async (groupId)=> {
                let group = await GetGroupById(groupId)
                groupArray.push(group.group)
            })
            setSubbedGroups(groupArray)

        }
        const handleSubChannels = async () => {
            let channelArray = []
            await user.subscribed_channels.forEach(async (channelId)=> {
                let channel = await GetChannelById(channelId)
                channelArray.push(channel.channel)
            })
            setSubbedChannels(channelArray)
        }
        const handleUserGroups = async () => {
            const data = await GetGroupsByUser(user._id)
            setUserGroups(data.groups)
        }
        const handleUserChannels = async () => {
            const data = await GetChannelsByUser(user._id)
            setUserChannels(data.channels)
        }
        const handleSavedPosts = async () => {
            let postArray = []
            await user.saved_posts.forEach(async (postId)=> {
                let post = await GetPostById(postId)
                postArray.push(post.post)
            })
            setSavedPosts(postArray)
        }
        const handleUserPosts = async () => {
            const data = await GetPostsByUser(user._id)
            setUserPosts(data.posts)
        }
        const handleUserComments = async () => {
            const data = await GetCommentByUser(user._id)
            setUserComments(data.comments)
        }
        handleSubGroups()
        handleSubChannels()
        handleUserGroups()
        handleUserChannels()
        handleSavedPosts()
        handleUserPosts()
        handleUserComments()
        console.log(user, 'library user')
    }, [showMyPosts, showComments, showSavedPosts, update])

    return (
        <div className="Main-container">
            <UserNav />
            <div className="Library-container">
                <h1>My Library</h1>
                <button onClick={()=>handleRefresh()}>Refresh</button>
                <h4>Subscribed Groups</h4>
                    <ItemMap items={subbedGroups} basePath='/groups/' />
                <h4>Subscribed Channels</h4>
                    <ItemMap items={subbedChannels} basePath='/channels/' />    
                <h4>My Groups</h4>
                    <ItemMap items={userGroups} basePath='/groups/' /> 
                <h4>My Channels</h4>
                    <ItemMap items={userChannels} basePath='/channels/' />
                <h4 onClick={()=>handleSavedPostsClick()}>Saved Posts</h4>
                    {
                        showSavedPosts ?
                        <PostMap items={savedPosts} user={user} setUpdate={setUpdate} update={update}/>
                        : ''
                    }
                <h4 className="My-Posts-header" onClick={()=>handleMyPostsClick()}>My Posts</h4>
                    {
                        showMyPosts ?
                        <PostMap items={userPosts} user={user} setUpdate={setUpdate} update={update}/>
                        : ''
                    }
            </div>
        </div>
    )
}

export default MyLibrary