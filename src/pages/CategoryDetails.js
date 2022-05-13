import ExploreNav from "../components/ExploreNav";
import Groups from "../components/Groups";
import Channels from "../components/Channels";
import Follow from "../components/Follow";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GetCategoryById } from "../services/CategoryServices";
import { FollowUnfollowCategory } from "../services/CategoryServices";
import { UnfollowCategoryUser } from "../services/UserServices";
import { FollowCategoryUser } from "../services/UserServices";
import { UserContext } from "../contexts/userContext";   



const CategoryDetails = () => {

    let { id } =useParams()

    const user = useContext(UserContext)

    const [category, setCategory] = useState({})
    const [redScore, setRed] = useState(null)
    const [blueScore, setBlue] = useState(null)
    const [indigio, setIndigo] = useState(null)


    useEffect(()=>{
        const handleCategory = async () => {
            const data = await GetCategoryById (id)
            setCategory(data.category)
            setRed(data.category.red_score)
            setBlue(data.category.blue_score)
            setIndigo(data.category.indigo)
        }
        
        handleCategory()
    }, [redScore, blueScore])

    return (
        <div className="Category-details">
            <ExploreNav />
            <div className="Category-header">
                <img className="Category-header-image" src={category.cover_image} />
                <h3>{category.name}</h3>
                <Follow 
                    item={category} 
                    user={user} 
                    userAttribute={user.subscribed_categories} 
                    updateFunction={FollowUnfollowCategory} 
                    followUserFunction ={FollowCategoryUser} 
                    unfollowUserFunction ={UnfollowCategoryUser}/>
            </div>
            <div className="Group-container">
                <h3>Groups</h3>
                <Groups categoryId = {id}/>
            </div>
            <div className="Channel-container">
                <h3>Channels</h3>
                <Channels categoryId = {id}/>
            </div>
        </div>
    )
}

export default CategoryDetails