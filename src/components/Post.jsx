import { useState, useEffect} from "react";
import EditPost from './EditPost'
import Reply from "./Reply";
import CommentMap from "./CommentMap";
import { useNavigate } from "react-router-dom";
import RedBlueBarSmall from "./RedBlueBarSmall";
import { UpdateIndigoPost } from "../services/PostServices";


const Post = ({ item, user, setUpdate, update }) => {

    let navigate = useNavigate()

    const userNavigate = (id) => {
        navigate(`/users/${id}`)
    }

    const [viewComments, setViewComments] = useState(false)
    const [reply, setReply] = useState(false)
    const [edit, setEdit] = useState(false)
    const [date, setDate] = useState('')
    const [channel, setChannel] = useState('')
    const [contentType, setContentType] = useState('')

    const viewPostComments = () => {
        viewComments ? setViewComments(false) : setViewComments(true)
    }

    const replyPost = () => {
        reply ? setReply(false) : setReply(true)
    }

    const editPost = () => {
       edit ? setEdit(false) : setEdit(true)
    }



    useEffect(()=>{
        const convertDateSetName = async () => {
            let formattedDate = new Date(item.updatedAt)
            setDate(`${(formattedDate.getMonth()+1).toString()}-${formattedDate.getDay()}-${formattedDate.getFullYear()} ${formattedDate.getUTCHours()}:${formattedDate.getUTCMinutes()}:${formattedDate.getUTCSeconds()} UTC`)
            await setChannel(item.channel_id.name)
            setContentType(item.content_type)
        }
        convertDateSetName()
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
                        <h5>{channel}</h5>
                        <h5 className="Post-title">{item.title}</h5>
                        {
                            contentType === 'text' ?
                            <h6 className="Post-content">{item.content}</h6>
                            : ''
                        }
                        {
                            contentType === 'image' ?
                            <img className="Post-image" src={item.image} />
                            : ''
                        }
                        {
                            contentType === 'video' ?
                            <iframe className="Post-video" src={item.video}></iframe>
                            : ''
                        }

                    </div>
                    <RedBlueBarSmall id={item._id} redScore={item.red_score} blueScore={item.blue_score} indigo={item.indigo} updateFunction={UpdateIndigoPost}/>
                    <div className="Post-actions-container">
                        <button onClick={()=>viewPostComments()}>View {item.comment_counter} Comments</button>
                        <button onClick={()=>replyPost()}>Reply</button>
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