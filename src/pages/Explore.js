import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllGroups } from "../services/GroupServices";
import ExploreNav from "../components/ExploreNav";

const Explore = () => {

    let navigate = useNavigate()

    const [items, setItems] = useState([])
    const [sortBy, setSort] = useState('AZ')
    const [trending, setTrending] = useState([])

    const handleSort = (event) => {
        setSort(event.target.value);
    }

    const handleClick = (id) => {
        navigate(`/explore/groups/${id}`)
    }
    
    useEffect(() => {
        const handleItems = async () => {
            const data = await GetAllGroups()
            console.log('Explore useEffect fired')
            console.log(data.groups, 'groups')
            setTrending(data.groups.sort((a, b) => a.views - b.views).slice(0, 5))
            if (sortBy === 'AZ') {
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
                <div className="Trending-container">
                    <p>Trending</p>
                    <div className="Trending-grid">
                        {
                            trending.map((item)=> (
                                <div className="Item-card" key={item._id} onClick={()=> handleClick(item._id)}>
                                <img className="Item-image" src={item.cover_image} />
                                <div className="Item-name-container">
                                <h5 className="Item-name">{item.name}</h5>   
                                </div>                           
                            </div>
                            ))
                        }
                    </div>
                </div>
                <div className='Item-container-expanded'>
                    <div className="Item-sort-container">
                        <h4>Groups </h4>
                        <label className="Item-sort-label">Sort: </label>
                        <select className="Item-sort-listbox" value={sortBy} onChange={handleSort}>
                            <option value="AZ">A - Z</option>
                            <option value="ZA">Z - A</option>
                        </select>
                    </div>
                    <div className="Item-back-arrow">
                    </div>
                    <div></div>
                </div>
                <div className="Item-grid">
                    {
                        items.map((item)=> (
                            <div className="Item-card" key={item._id} onClick={()=> handleClick(item._id)}>
                                <img className="Item-image" src={item.cover_image} />
                                <div className="Item-name-container">
                                <h5 className="Item-name">{item.name}</h5>   
                                </div>                           
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Explore