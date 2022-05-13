import { useEffect, useState } from "react"
import ItemMap from "./ItemMap";


const Groups = ({ id, getGroups }) => {

    const [groups, setGroups] = useState([])

    useEffect(()=> {
        const handleGroups = async () => {
            const data = await getGroups(id)
            setGroups(data.groups)
        }
        handleGroups()
    }, [])

    return (
        <ItemMap items={groups} basePath='/explore/groups/' />
    )
}

export default Groups