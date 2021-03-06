import { useEffect, useState } from "react";
import PostMap from "./PostMap";


const Posts = ({ id, getPosts, user }) => {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        const handlePosts = async () => {
            const data = await getPosts(id)
            // setPosts(data.posts)
            setPosts(data.posts.sort((a, b) => a.updatedAt.localeCompare(b.updatedAt)).reverse())
        }
        handlePosts()
    }, [])

    return (
        <div className="Post-list-container">
            <PostMap items={posts} user={user} />
        </div>
    )
}

export default Posts