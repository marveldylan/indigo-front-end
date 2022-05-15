import { useState, useEffect} from "react";
import Comment from "./Comment";
import { GetCommentByPost } from "../services/CommentServices";

const CommentMap = ({ post }) => {

    const[comments, setComments] = useState([])

    useEffect(()=> {
        const handleComments = async () => {
            const data = await GetCommentByPost(post._id)
            setComments(data.comments)
            console.log(data.comments)
        }
        handleComments()
    }, [])

        return (
            <div className="Item-grid">
                {
                    comments.map((comment)=> (
                        <Comment comment={comment} />
                    ))
                }
            </div>
        )
}

export default CommentMap