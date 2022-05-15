import { useState, useEffect } from "react";
import { CreateNewGroup } from "../services/GroupServices";
import { GetGroupsByUser } from "../services/GroupServices";
import { GetAllCategories } from "../services/CategoryServices";
import { useNavigate } from "react-router-dom";

const CreateGroup = ({user}) => {

    let navigate = useNavigate()

    const [ categories, setCategories] = useState([])
    const [ formValues, setFormValues ] = useState({
        categoryId: '',
        name: '',
        image: ''
    });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleClick = (category) => {
        setFormValues({...formValues, categoryId: category._id})
    }

    const createGroup = async () => {
        await CreateNewGroup(
            user.id,
            formValues.categoryId,
            formValues.name,
            formValues.image
        )
        setFormValues({...formValues, categoryId: '', name: '', image: ''})
        navigate('/library')
    }

    useEffect(()=>{
        console.log(user)
        const handleCategories = async () => {
            const data = await GetAllCategories()
            setCategories(data.categories)
        }
        handleCategories()
    }, [formValues.categoryId])


    return(
        <div>
            <h6>Select Category to Add Group:</h6>
            <div className="Item-grid">
                {
                    categories.map((item)=> (
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
                    classname="Create-channel-text"
                    type="text"
                    name="name"
                    value={formValues.name}
                    placeholder='Channel Name'
                    onChange={handleChange}
                    required
                />
                <textarea
                    className="Create-channel-text"
                    type="text"
                    name="image"
                    value={formValues.image}
                    placeholder='Link to Channel Cover Image'
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="Channel-actions-container">
                <button onClick={()=>createGroup()}>Create Group</button>
            </div>
        </div>
    )
}

export default CreateGroup