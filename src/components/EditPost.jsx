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
            <h3 onClick={()=> setEdit(false)}>Back</h3>
            <button onClick={()=>deletePost()}>Delete</button>
            <div className="Post-container">
                <div className="Post-content-container">
                    <h6>{item.user_id.username}</h6>
                    <input
                        classname="Post-update-title"
                        type="text"
                        name="title"
                        value={formValues.title}
                        placeholder={item.title}
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
                                    placeholder={item.content}
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
                                    placeholder={item.image}
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
                                    placeholder={item.video}
                                    onChange={handleChange}
                                />
                            </div>
                                : ''
                    }
                </div>
                <div className="Post-actions-container">
                    <button onClick={()=>updatePost()}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default EditPost