import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllCategories } from "../services/CategoryServices";
import ExploreNav from "../components/ExploreNav";
import ItemMap from "../components/ItemMap";

const Explore = () => {

    let navigate = useNavigate()

    const [items, setItems] = useState([])
    const [sortBy, setSort] = useState('AZ')
    const [trending, setTrending] = useState([])

    const handleSort = (event) => {
        setSort(event.target.value);
    }
    
    useEffect(() => {
        const handleItems = async () => {
            const data = await GetAllCategories()
            setTrending(data.categories.sort((a, b) => a.views - b.views).slice(0, 5))
            if (sortBy === 'AZ') {
                // Alphabetical sort direction taken from Stack Overflow: https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
                setItems(data.categories.sort((a, b) => a.name.localeCompare(b.name)))
            } else if (sortBy === 'ZA') {
                setItems(data.categories.sort((a, b) => a.name.localeCompare(b.name)).reverse())
            }

        }
        handleItems()
    }, [sortBy])

    return (
        <div className="Main-container">
            <ExploreNav />
            <div className="Item-container">
                <div className="Item-header-container">
                    <h4>Trending</h4>
                </div>
                <ItemMap items={trending} basePath='/explore/categories/' />
                <div className='Item-container-expanded'>
                    <div className="Item-header-container">
                        <h4>Explore Categories</h4>
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
                <ItemMap items={items} basePath='/explore/categories/' />
            </div>
        </div>
    )
}

export default Explore