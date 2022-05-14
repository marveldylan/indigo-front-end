import { useEffect, useState } from "react";
import PostMap from "./PostMap";


const Posts = ({ id, getPosts }) => {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        const handlePosts = async () => {
            const data = await getPosts(id)
            setPosts(data.posts)
        }
        handlePosts()
    }, [])

    return (
        <div>
            <PostMap items={posts} />
        </div>
    )
}

export default Posts