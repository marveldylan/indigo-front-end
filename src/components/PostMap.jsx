import { useState, useEffect } from "react";
import Comments from "./Comments";

const PostMap = ({ items }) => {

    const [viewComments, setViewComments] = useState(false)
    const [reply, setReply] = useState(false)

    const viewPostComments = (id) => {
        console.log(id, 'post id')
        setViewComments(true)
    }

    const replyPost = (id) => {
        console.log(`reply to post with id: ${id}`)
    }

    useEffect(()=> {

    }, [])

        return (
            <div className="Post-grid">
                {
                    items.map((item)=> (
                        <div className="Post-card" key={item._id} style={{backgroundImage: `url(${item.background})`}}>
                            <div className="Post-content-container">
                                <h6>{item.user_id.username}</h6>
                                <h5 className="Post-title">{item.title}</h5>
                                <h6 className="Post-content">{item.content}</h6>   
                            </div>
                            <div className="Post-actions-container">
                                <button onClick={()=>viewPostComments(item._id)}>View {item.comment_counter} Comments</button>
                                <button onClick={()=>replyPost(item._id)}>Reply</button>
                            </div>
                            {
                                viewComments ?
                                <Comments />
                                : ''
                            }
                        </div>
                    ))
                }
            </div>
        )
}

export default PostMap