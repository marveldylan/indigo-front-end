import ExploreNav from "../components/ExploreNav";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetGroupById } from "../services/GroupServices";


const GroupDetails = () => {

    let { id } =useParams()

    const [group, setGroup] = useState({})
    const [redScore, setRed] = useState(null)
    const [blueScore, setBlue] = useState(null)
    const [indigio, setIndigo] = useState(null)

    useEffect(()=>{
        const handleGroup = async () => {
            const data = await GetGroupById(id)
            setGroup(data.group)
            setRed(data.group.red_score)
            setBlue(data.group.blue_score)
            setIndigo(data.group.indigo)
            console.log(data.group)
        }
        handleGroup()
    }, [redScore, blueScore])

    return (
        <div className="Group-details">
            <ExploreNav />
            <h3>{group.name}</h3>
            <h4>Followers: {group.follower_counter}</h4>
            <h4>Views: {group.views}</h4>
            <h4>Channels: {group.channel_counter}</h4>
            <h4>Indigo: {group.indigo}</h4>
        </div>
    )
}

export default GroupDetails