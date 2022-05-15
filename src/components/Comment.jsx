import { useNavigate } from "react-router-dom";

const Comment = ({ comment }) => {


    let navigate = useNavigate()

    const userNavigate = (id) => {
        navigate(`/users/${id}`)
    }


    return (
        <div className="Item-container">
            <h6 className="Username" onClick={()=>userNavigate(comment.user_id._id)}>{comment.user_id.username}</h6>
            <img className="Comment-profile-image" src={comment.user_id.profile_image} />
        <h6>{comment.content}</h6>
    </div>
    )

}

export default Comment