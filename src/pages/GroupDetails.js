import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetGroupById } from "../services/GroupServices";


const GroupDetails = () => {

    let { id } =useParams()

    const [group, setGroup] = useState({})

    useEffect(()=>{
        const handleGroup = async () => {
            const data = await GetGroupById(id)
            setGroup(data.group)
            console.log(data.group)
        }
        handleGroup()
    }, [])

    return (
        <h1>Group Details</h1>
        <h2>Tests</h2>
    )
}

export default GroupDetails