import ExploreNav from "../components/ExploreNav";
import Groups from "../components/Groups";
import Channels from "../components/Channels";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetCategoryById } from "../services/CategoryServices";


const CategoryDetails = () => {

    let { id } =useParams()

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
            console.log(data.category)
        }
        handleCategory()
    }, [redScore, blueScore])

    return (
        <div className="Category-details">
            <ExploreNav />
            <div className="Category-header">
                <img className="Category-header-image" src={category.cover_image} />
                <h3>{category.name}</h3>
                <h4>Followers: {category.follower_counter}</h4>
                <h4>Channels: {category.channel_counter}</h4>
            </div>
            <div className="Group-grid">
                <Groups categoryId = {id}/>
            </div>
            <div className="Channel-grid">
                <Channels categoryId = {id}/>
            </div>
        </div>
    )
}

export default CategoryDetails