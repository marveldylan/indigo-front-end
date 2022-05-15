import { useState, useEffect} from "react";
import EditPost from './EditPost'
import Reply from "./Reply";
import CommentMap from "./CommentMap";
import { useNavigate } from "react-router-dom";


const Post = ({ item, user, setUpdate, update }) => {

    let navigate = useNavigate()

    const userNavigate = (id) => {
        navigate(`/users/${id}`)
    }

    const [viewComments, setViewComments] = useState(false)
    const [reply, setReply] = useState(false)
    const [edit, setEdit] = useState(false)
    const [date, setDate] = useState('')

    const viewPostComments = (id) => {
        viewComments ? setViewComments(false) : setViewComments(true)
    }

    const replyPost = (id) => {
        reply ? setReply(false) : setReply(true)
    }

    const editPost = (id) => {
       edit ? setEdit(false) : setEdit(true)
    }



    useEffect(()=>{
        const convertDate = () => {
            let formattedDate = new Date(item.updatedAt)
            setDate(`${(formattedDate.getMonth()+1).toString()}-${formattedDate.getDay()}-${formattedDate.getFullYear()} ${formattedDate.getUTCHours()}:${formattedDate.getUTCMinutes()}:${formattedDate.getUTCSeconds()} UTC`)
        }
        convertDate()
    }, [edit])


    return (
        <div className="Post-card" key={item._id} style={{backgroundImage: `url(${item.background})`}}>
            {
                edit ?
                <EditPost item={item} user={user} setEdit={setEdit} setUpdate={setUpdate} update={update}/>
                :
                <div className="Post-container">
                    {
                        (item.user_id._id === user._id) ?
                        <div className="Post-tools">
                            <button onClick={()=>editPost(item._id)}>Edit</button>
                        </div>
                        : ''
                    }
                    <div className="Post-content-container">
                        <img className="Post-profile-image" src={item.user_id.profile_image} />
                        <h6 className="Username" onClick={()=>userNavigate(item.user_id._id)}>{item.user_id.username}</h6>
                        <h6>{date}</h6>
                        <h5 className="Post-title">{item.title}</h5>
                        <h6 className="Post-content">{item.content}</h6>   
                    </div>
                    <div className="Post-actions-container">
                        <button onClick={()=>viewPostComments(item._id)}>View {item.comment_counter} Comments</button>
                        <button onClick={()=>replyPost(item._id)}>Reply</button>
                    </div>
                    {
                        reply ?
                        <Reply item={item} user={user} setUpdate={setUpdate} update={update} reply={reply} setReply={setReply}/>
                        : ''
                    }
                    {
                        viewComments ?
                        <CommentMap post={item}/>
                        : ''
                    }
                </div>
        }
        </div>
    )
}

export default Post