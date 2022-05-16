import { useState } from "react";
import { UpdatePost } from "../services/PostServices";
import { DeletePost } from "../services/PostServices";

const EditPost = ({ item, user, setEdit, setUpdate, update }) => {

    const [ formValues, setFormValues ] = useState({
        title: item.title,
        contentType: item.content_type,
        content: item.content,
        image: item.image,
        video: item.video
    });

    const deletePost = async () => {
        await DeletePost(item._id)
        setEdit(false)
        update ? setUpdate(false) : setUpdate(true)
    }

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

    const updatePost = async () => {
        await UpdatePost(item._id, formValues.title, formValues.contentType, formValues.content, formValues.image, formValues.video)
        setEdit(false)
        update ? setUpdate(false) : setUpdate(true)
    }


    return (
        <div className="Edit-post-container">
            <div className="Edit-actions">
                <p className="Link" onClick={()=> setEdit(false)}>Back</p>
                <p className="Link" onClick={()=>deletePost()}>Delete</p>
            </div>
            <div className="Post-container">
                <div className="Post-content-container">
                    <h6>{item.user_id.username}</h6>
                    <p className="Post-label">Title:</p>
                    <input
                        className="Post-update-form"
                        type="text"
                        name="title"
                        value={formValues.title}
                        placeholder={item.title}
                        onChange={handleChange}
                        required
                    />
                    <div className="Post-content-type">
                        <h6>Post Content Type:</h6>
                        <div className="Post-type-buttons">
                            <button className="Post-btn" onClick={()=>handleClick('text')}>Text</button>
                            <button className="Post-btn" onClick={()=>handleClick('image')}>Image</button>
                            <button className="Post-btn" onClick={()=>handleClick('video')}>Video</button>
                        </div>
                    </div>
                    {
                        formValues.contentType === 'text' ?
                            <div>
                                <p className="Post-label">Content:</p>
                                <textarea
                                    className="Post-update-form"
                                    type="text"
                                    name="content"
                                    value={formValues.content}
                                    placeholder={item.content}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                                : ''
                    }
                    {
                        formValues.contentType === 'image' ?
                            <div>
                                <p className="Post-label">Image Link:</p>
                                <input
                                    className="Post-update-form"
                                    type="text"
                                    name="image"
                                    value={formValues.image}
                                    placeholder={item.image}
                                    onChange={handleChange}
                                />
                                </div>
                                : ''
                    }
                    {
                        formValues.contentType === 'video' ?
                            <div>
                                <p className="Post-label">Video Link:</p>
                                <input
                                    className="Post-update-form"
                                    type="text"
                                    name="video"
                                    value={formValues.video}
                                    placeholder={item.video}
                                    onChange={handleChange}
                                />
                            </div>
                                : ''
                    }
                </div>
                <div className="Post-actions-container">
                    <button className="Post-button" onClick={()=>updatePost()}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default EditPost