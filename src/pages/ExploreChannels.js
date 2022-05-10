import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllChannels } from "../services/ChannelServices";
import ExploreNav from "../components/ExploreNav";

const ExploreChannels = (props) => {
    let navigate = useNavigate()

    const [items, setItems] = useState([])
    const [sortBy, setSort] = useState('')
    const [detailsState, setDetailsState] = useState('Item-details-collapsed')
    const [itemState, setItemState] = useState('Item-container-expanded')

    const handleSort = (event) => {
        setSort(event.target.value);
    }

    const showDetails = (item) => {
        setDetailsState('Item-details-expanded')
        setItemState('Item-container-collapsed')
    }
    
    useEffect(() => {
        const handleItems = async () => {
            const data = await GetAllChannels()
            console.log(data.channels, 'channels')
            if (sortBy === '') {
                setItems(data.channels)
            }
            else if (sortBy === 'AZ') {
                // Alphabetical sort direction taken from Stack Overflow: https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
                setItems(data.channels.sort((a, b) => a.name.localeCompare(b.name)))
            } else if (sortBy === 'ZA') {
                setItems(data.channels.sort((a, b) => a.name.localeCompare(b.name)).reverse())
            }

        }
        handleItems()
    }, [sortBy, detailsState])

    return (
        <div className="Main-container">
            <ExploreNav />
            <div className={detailsState}>

            </div>
            <div className="Item-container">
                <div className={itemState}>
                    <label>Sort: </label>
                    <select className="Item-sort" value={sortBy} onChange={handleSort}>
                        <option value="AZ">A - Z</option>
                        <option value="ZA">Z - A</option>
                    </select>
                </div>
                <div className="Item-grid">
                    {
                        items.map((item)=> (
                            <div className="Item-card" key={item._id} onClick={()=> showDetails(item)}>
                                <h4 className="Item-name">{item.name}</h4>                              
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ExploreChannels