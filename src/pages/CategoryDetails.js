import ExploreNav from "../components/ExploreNav";
import Groups from "../components/Groups";
import Channels from "../components/Channels";
import Follow from "../components/Follow";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GetGroupsByCategory } from "../services/GroupServices";
import { GetChannelsByCategory } from "../services/ChannelServices";
import { GetCategoryById } from "../services/CategoryServices";
import { FollowUnfollowCategory } from "../services/CategoryServices";
import { UnfollowCategoryUser } from "../services/UserServices";
import { FollowCategoryUser } from "../services/UserServices";
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
        <div className="Category-details">
            <ExploreNav />
            <div className="Category-header">
                <img className="Category-header-image" src={category.cover_image} />
                <h3>{category.name}</h3>
                <Follow 
                    item={category}
                    followers={category.follower_counter}
                    user={user} 
                    userAttribute={user.subscribed_categories} 
                    updateFunction={FollowUnfollowCategory} 
                    followUserFunction ={FollowCategoryUser} 
                    unfollowUserFunction ={UnfollowCategoryUser}
                />
            </div>
            <div className="Group-container">
                <h3>Groups</h3>
                <Groups id = {id} getGroups={GetGroupsByCategory} />
            </div>
            <div className="Channel-container">
                <h3>Channels</h3>
                <Channels id = {id} getChannels={GetChannelsByCategory} />
            </div>
        </div>
    )
}

export default CategoryDetails