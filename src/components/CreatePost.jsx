import { useState } from "react"
import { CreateNewPost } from "../services/PostServices"

const CreatePost = ({channel, user, setShowCreatePost, refresh, setRefresh}) => {

    const [ formValues, setFormValues ] = useState({
        title: channel.title,
        content: channel.content,
        contentType: 'text',
        image: '',
        video: '',
        background: user.post_background
    });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleClick = (type) => {
        if(type === 'text') {
            setFormValues({...formValues, contentType: 'text', image: '', video: ''})
        } else if (type === 'image') {
            setFormValues({...formValues, contentType: 'image', content: '', video: ''})
        } else if (type === 'video') {
            setFormValues({...formValues, contentType: 'video', content: '', image: ''})
        }
    }

    const createPost = async () => {
        await CreateNewPost(
            channel._id,
            user._id,
            formValues.title,
            formValues.contentType,
            formValues.content,
            formValues.image,
            formValues.video,
            formValues.background
        )
        setFormValues({...formValues, title: '', contentType: '', content: '', image: '', video: ''})
        setShowCreatePost(false)
        refresh ? setRefresh(false) : setRefresh(true)
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
                <div className="Post-content-type">
                    <h6>Post Content Type</h6>
                    <button onClick={()=>handleClick('text')}>Text</button>
                    <button onClick={()=>handleClick('image')}>Image</button>
                    <button onClick={()=>handleClick('video')}>Video</button>
                </div>
                {
                    formValues.contentType === 'text' ?
                        <div>
                            <p>Content:</p>
                            <textarea
                                className="Post-update-content"
                                type="text"
                                name="content"
                                value={formValues.content}
                                placeholder={channel.content}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                            : ''
                }
                {
                    formValues.contentType === 'image' ?
                        <div>
                            <p>Image Link:</p>
                            <input
                                className="Post-update-image"
                                type="text"
                                name="image"
                                value={formValues.image}
                                placeholder={channel.image}
                                onChange={handleChange}
                            />
                            </div>
                            : ''
                }
                {
                    formValues.contentType === 'video' ?
                        <div>
                            <p>Video Link:</p>
                            <input
                                className="Post-update-video"
                                type="text"
                                name="video"
                                value={formValues.video}
                                placeholder={channel.video}
                                onChange={handleChange}
                            />
                        </div>
                            : ''
                }
            </div>
            <div className="Post-actions-container">
                <button onClick={()=>createPost()}>Post</button>
            </div>
        </div>
    )
}

export default CreatePost