import { useEffect, useState } from "react"
import { GetGroupByCategory } from "../services/GroupServices";


const Groups = (props) => {

    const [groups, setGroups] = useState([])

    useEffect(()=> {
        const handleGroups = async () => {
            const data = await GetGroupByCategory(props.categoryId)
            setGroups(data.groups)
        }
        handleGroups()
    })

    return (
        <div className="Group-grid">
            {
                groups.map((groups)=> (
                    <div>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default Groups