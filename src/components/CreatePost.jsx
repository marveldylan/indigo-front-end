import { useState } from "react"
import { CreateNewPost } from "../services/PostServices"

const CreatePost = ({channel, user, setShowCreatePost}) => {

    const [ formValues, setFormValues ] = useState({
        title: channel.title,
        content: channel.content,
        attachment: channel.attachment,
        background: user.post_background
    });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const createPost = async () => {
        await CreateNewPost(
            channel._id,
            user._id,
            formValues.title,
            formValues.content,
            formValues.attachment,
            formValues.background
        )
        setFormValues({...formValues, title: '', content: '', attachment: ''})
        setShowCreatePost(false)
    }

    return (
        <div className="Post-container">
            <div className="Post-content-container">
                <h6>{channel.user_id.username}</h6>
                <p></p>
                <input
                    classname="Post-update-title"
                    type="text"
                    name="title"
                    value={formValues.title}
                    placeholder={channel.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    className="Post-update-content"
                    type="text"
                    name="content"
                    value={formValues.content}
                    placeholder={channel.content}
                    onChange={handleChange}
                ></textarea>
                <input
                    classname="Post-update-attachment"
                    type="text"
                    name="attachment"
                    value={formValues.attachment}
                    placeholder={channel.attachment}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="Post-actions-container">
                <button onClick={()=>createPost()}>Post</button>
            </div>
        </div>
    )
}

export default CreatePost