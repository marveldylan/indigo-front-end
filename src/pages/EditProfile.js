import { useState, useEffect, useContext } from "react"
import { UserContext } from "../contexts/userContext"
import { UpdateUser } from "../services/UserServices";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

    let navigate = useNavigate()

    const [user, setUser] = useContext(UserContext)

    const [ formValues, setFormValues ] = useState({
        firstName: user.first_name,
        lastName: user.last_name,
        username: user.username,
        email: user.email,
        about: user.about,
        profileImage: user.profile_image,
        coverImage: user.cover_image,
        postBackground: user.post_background,
        commentBackground: user.comment_background
    })

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const updateUser = async () => {
        await UpdateUser(
            user._id, 
            formValues.firstName, 
            formValues.lastName,
            formValues.username,
            formValues.email,
            formValues.about,
            formValues.profileImage,
            formValues.coverImage,
            formValues.postBackground,
            formValues.commentBackground
        )
        navigate('/account')
    }


    return (
        <div className="Edit-profile-container">
            <div className="Edit-public">
                <h6 className="Profile-header">Public Information</h6>
                <p className="Edit-profile-label">Username:</p>
                <input 
                    className="Post-update-form"
                    type="text"
                    name="username"
                    value={formValues.username}
                    placeholder={user.username}
                    onChange={handleChange}
                />
                <p className="Edit-profile-label">About:</p>    
                <textarea
                    className="Post-update-form"
                    type="text"
                    name="about"
                    value={formValues.about}
                    placeholder={user.about}
                    onChange={handleChange}
                ></textarea>
                <p className="Edit-profile-label">Profile Image:</p>
                <input 
                    className="Post-update-form"
                    type="text"
                    name="profileImage"
                    value={formValues.profileImage}
                    placeholder={user.profile_image}
                    onChange={handleChange}
                />
                <p className="Edit-profile-label">Cover Image:</p>
                <input 
                    className="Post-update-form"
                    type="text"
                    name="coverImage"
                    value={formValues.coverImage}
                    placeholder={user.cover_image}
                    onChange={handleChange}
                />
                 <p className="Edit-profile-label">Post Background:</p>               
                 <input 
                    className="Post-update-form"
                    type="text"
                    name="postBackground"
                    value={formValues.postBackground}
                    placeholder={user.post_background}
                    onChange={handleChange}
                />
                <p className="Edit-profile-label">Comment Background:</p>               
                 <input 
                    className="Post-update-form"
                    type="text"
                    name="commentBackground"
                    value={formValues.commentBackground}
                    placeholder={user.comment_background}
                    onChange={handleChange}
                />
            </div>
            <div className="Edit-personal">
                <h6 className="Profile-header">Personal Information</h6>
                <p className="Edit-profile-label">First Name:</p>
                <input 
                    className="Post-update-form"
                    type="text"
                    name="firstName"
                    value={formValues.firstName}
                    placeholder={user.first_name}
                    onChange={handleChange}
                />
                <p className="Edit-profile-label">Last Name:</p>
                <input
                    className="Post-update-form"
                    type="text"
                    name="lastName"
                    value={formValues.lastName}
                    placeholder={user.last_name}
                    onChange={handleChange}
                />
                <p className="Edit-profile-label">Email:</p>
                <input 
                    className="Post-update-form"
                    type="text"
                    name="email"
                    value={formValues.email}
                    placeholder={user.email}
                    onChange={handleChange}
                />
            </div>
            <div className="Edit-actions-container">
                <button className="Post-button" onClick={()=>updateUser()}>Update </button>
            </div>
        </div>
    )
}

export default EditProfile