import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllGroups } from "../services/GroupServices";
import ExploreNav from "../components/ExploreNav";
import ItemMap from "../components/ItemMap";

const ExploreGroups = (props) => {

    let navigate = useNavigate()

    const [items, setItems] = useState([])
    const [sortBy, setSort] = useState('')

    const handleSort = (event) => {
        setSort(event.target.value);
    }
    
    useEffect(() => {
        const handleItems = async () => {
            const data = await GetAllGroups()
            console.log(data.groups, 'groups')
            if (sortBy === '') {
                setItems(data.groups)
            }
            else if (sortBy === 'AZ') {
                // Alphabetical sort direction taken from Stack Overflow: https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
                setItems(data.groups.sort((a, b) => a.name.localeCompare(b.name)))
            } else if (sortBy === 'ZA') {
                setItems(data.groups.sort((a, b) => a.name.localeCompare(b.name)).reverse())
            }

        }
        handleItems()
    }, [sortBy])

    return (
        <div className="Main-container">
            <ExploreNav />
            <div className="Item-container">
                <div className='Item-container-expanded'>
                <div className="Item-header-container">
                        <h4>Explore Groups</h4>
                    </div>
                    <div className="Item-back-arrow">
                    </div>
                    <div className="Item-sort-container">
                        <select className="Item-sort-listbox" value={sortBy} onChange={handleSort}>
                            <option value="AZ">A - Z</option>
                            <option value="ZA">Z - A</option>
                        </select>
                    </div>
                </div>
                <ItemMap items={items} basePath='/explore/groups/' />
            </div>
        </div>
    )
}

export default ExploreGroups