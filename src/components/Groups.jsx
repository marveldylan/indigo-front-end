import { useEffect, useState } from "react"
import { GetGroupsByCategory } from "../services/GroupServices";
import ItemMap from "./ItemMap";


const Groups = (props) => {

    const [groups, setGroups] = useState([])

    useEffect(()=> {
        const handleGroups = async () => {
            const data = await GetGroupsByCategory(props.categoryId)
            setGroups(data.groups)
        }
        handleGroups()
    }, [])

    return (
        <ItemMap items={groups} basePath='/explore/groups/' />
    )
}

export default Groups