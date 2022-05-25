import { useState } from 'react';
import { CreateComment } from '../services/CommentServices';

const Reply = ({ item, user, setUpdate, update, reply, setReply }) => {
    const [ formValues, setFormValues ] = useState({
        content: '',
    })

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await CreateComment(user._id, item._id, formValues.content, user.comment_background)
        setFormValues({...formValues, content: ''})
        update ? setUpdate(false) : setUpdate(true)
        setReply(false)
    }
    return(
        <div className="Reply-container">
            <h6>{user.username}</h6>
            <textarea
                className="Post-update-form"
                type="text"
                name="content"
                value={formValues.content}
                placeholder="Reply here"
                onChange={handleChange}
            ></textarea>
            <button className="Post-btn" type="submit" onClick={handleSubmit} disabled={!formValues.content}>Reply</button>
        </div>
        )
}

export default Reply