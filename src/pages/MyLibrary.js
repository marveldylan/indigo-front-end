import ItemMap from "../components/ItemMap";
import UserNav from "../components/UserNav";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { GetGroupById } from "../services/GroupServices";
import { GetChannelById } from "../services/ChannelServices";
import { GetPostById } from "../services/PostServices";
import { GetCommentById } from "../services/CommentServices";

const MyLibrary = () => {

    const [user, setUser] = useContext(UserContext)

    const [subbedGroups, setSubbedGroups] = useState([])
    const [subbedChannels, setSubbedChannels] = useState([])
    const [userGroups, setUserGroups] = useState([])
    const [userChannels, setUserChannels] = useState([])
    const [savedPosts, setSavedPosts] = useState([])
    const [userPosts, setUserPosts]  = useState([])
    const [comments, setUserComments] = useState([])

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
            let groupArray = []
            await user.user_groups.forEach(async (groupId)=> {
                let group = await GetGroupById(groupId)
                groupArray.push(group.group)
            })
            setUserGroups(groupArray)
        }
        const handleUserChannels = async () => {
            let channelArray = []
            await user.user_channels.forEach(async (channelId)=> {
                let channel = await GetChannelById(channelId)
                channelArray.push(channel.channel)
            })
            setUserChannels(channelArray)
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
            let postArray = []
            await user.user_posts.forEach(async (postId)=> {
                let post = await GetPostById(postId)
                postArray.push(post.post)
            })
            setUserPosts(postArray)
        }
        const handleUserComments = async () => {
            let commentArray = []
            await user.user_comments.forEach(async (commentId)=> {
                let comment = await GetCommentById(commentId)
                commentArray.push(comment.comment)
            })
            setUserComments(commentArray)
        }
        handleSubGroups()
        handleSubChannels()
        handleUserGroups()
        handleUserChannels()
        handleSavedPosts()
        handleUserPosts()
        handleUserComments()
    }, [])

    return (
        <div className="Main-container">
            <UserNav />
            <div className="Library-container">
                <h1>My Library</h1>
                <h4>Subscribed Groups</h4>
                    <ItemMap items={subbedGroups} basePath='/explore/groups/' />
                <h4>Subscribed Channels</h4>
                    <ItemMap items={subbedChannels} basePath='/explore/channels/' />    
                <h4>My Groups</h4>
                    <ItemMap items={userGroups} basePath='/my/groups/' /> 
                <h4>My Channels</h4>
                    <ItemMap items={userChannels} basePath='/my/channels/' />
                <h4>Saved Posts</h4>

                <h4>My Posts</h4>
                    {/* map posts */}
                <h4>My Comments</h4>
                {/* map posts */}
            </div>
        </div>
    )
}

export default MyLibrary