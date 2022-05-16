import { useState, useEffect } from "react";
import { CreateNewChannel } from "../services/ChannelServices";
import { GetGroupsByUser } from "../services/GroupServices";
import { useNavigate } from "react-router-dom";

const CreateChannel = ({user}) => {

    let navigate = useNavigate()

    const [ userGroups, setUserGroups] = useState([])
    const [ formValues, setFormValues ] = useState({
        groupId: '',
        categoryId: '',
        name: '',
        image: ''
    });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleClick = (group) => {
        setFormValues({...formValues, groupId: group._id, categoryId: group.category_id})
    }

    const createChannel = async () => {
        await CreateNewChannel(
            user.id,
            formValues.groupId,
            formValues.categoryId,
            formValues.name,
            formValues.image
        )
        setFormValues({...formValues, groupId: '', categoryId: '', name: '', image: ''})
        navigate('/library')
    }

    useEffect(()=>{
        console.log(user)
        const handleUserGroups = async () => {
            const data = await GetGroupsByUser(user.id)
            setUserGroups(data.groups)
        }
        handleUserGroups()
    }, [formValues.groupId])


    return(
        <div>
            <h4 className="Create-title">Select Group to Add Channel:</h4>
            <div className="Item-grid">
                {
                    userGroups.map((item)=> (
                        <div className="Item-card" key={item._id} onClick={()=> handleClick(item)}>
                            <img className="Item-image" src={item.cover_image} />
                            <div className="Item-name-container">
                            <h5 className="Item-name">{item.name}</h5>   
                            </div>                           
                        </div>
                    ))
                }
            </div>
            <div className="Create-channel-container">
            <input
                    className="Post-update-form"
                    type="text"
                    name="name"
                    value={formValues.name}
                    placeholder='Channel Name'
                    onChange={handleChange}
                    required
                />
                <textarea
                    className="Post-update-form"
                    type="text"
                    name="image"
                    value={formValues.image}
                    placeholder='Link to Channel Cover Image'
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="Channel-actions-container">
                <button className="Post-button" onClick={()=>createChannel()}>Create Channel</button>
            </div>
        </div>
    )
}

export default CreateChannel