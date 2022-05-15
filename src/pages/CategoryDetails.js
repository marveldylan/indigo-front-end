import ExploreNav from "../components/ExploreNav";
import Groups from "../components/Groups";
import Channels from "../components/Channels";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GetGroupsByCategory } from "../services/GroupServices";
import { GetChannelsByCategory } from "../services/ChannelServices";
import { GetCategoryById } from "../services/CategoryServices";
import { UserContext } from "../contexts/userContext";  




const CategoryDetails = () => {

    let { id } =useParams()

    const [user, setUser] = useContext(UserContext)

    const [category, setCategory] = useState({})



    useEffect(()=>{
        console.log(user, 'user')
        const handleCategory = async () => {
            const data = await GetCategoryById (id)
            setCategory(data.category)
        }
        
        handleCategory()
    }, [user.subscribed_categories])

    return (
        <div className="Page-details">
            <ExploreNav />
            <div className="Page-header">
                <img className="Page-header-image" src={category.cover_image} />
                <h2 className="Page-title">{category.name}</h2>
            </div>
            <div className="Map-container">
                <h3 className="Map-title">Groups</h3>
                <Groups id = {id} getGroups={GetGroupsByCategory} />
            </div>
            <div className="Map-container">
                <h3 className="Map-title">Channels</h3>
                <Channels id = {id} getChannels={GetChannelsByCategory} />
            </div>
        </div>
    )
}

export default CategoryDetails