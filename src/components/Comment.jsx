import { useNavigate } from "react-router-dom";
import RedBlueBarSmall from "./RedBlueBarSmall";
import { UpdateIndigoComment } from "../services/CommentServices";

const Comment = ({ comment }) => {


    let navigate = useNavigate()

    const userNavigate = (id) => {
        navigate(`/users/${id}`)
    }


    return (
        <div className="Reply-container" style={{backgroundImage: `url(${comment.background})`}}>
            <h6 className="Username" onClick={()=>userNavigate(comment.user_id._id)}>{comment.user_id.username}</h6>
            <img className="Comment-profile-image" src={comment.user_id.profile_image} />
        <h6>{comment.content}</h6>
        <RedBlueBarSmall id={comment._id} redScore={comment.red_score} blueScore={comment.blue_score} indigo={comment.indigo} updateFunction={UpdateIndigoComment}/>
    </div>
    )

}

export default Comment