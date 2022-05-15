import { useState } from "react";
import { UpdatePost } from "../services/PostServices";
import { DeletePost } from "../services/PostServices";

const EditPost = ({ item, user, setEdit, setUpdate, update }) => {

    const [ formValues, setFormValues ] = useState({
        title: item.title,
        content: item.content,
        attachment: item.attachment
    });

    const deletePost = async () => {
        await DeletePost(item._id)
        setEdit(false)
        update ? setUpdate(false) : setUpdate(true)
    }

      const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const updatePost = async () => {
        await UpdatePost(item._id, formValues.title, formValues.content, formValues.attachment)
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
                    <textarea
                        className="Post-update-content"
                        type="text"
                        name="content"
                        value={formValues.content}
                        placeholder={item.content}
                        onChange={handleChange}
                    ></textarea>
                                <input
                        classname="Post-update-attachment"
                        type="text"
                        name="attachment"
                        value={formValues.attachment}
                        placeholder={item.attachment}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="Post-actions-container">
                    <button onClick={()=>updatePost()}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default EditPost