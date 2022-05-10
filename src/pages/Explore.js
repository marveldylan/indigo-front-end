import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllGroups } from "../services/GroupServices";
import ExploreNav from "../components/ExploreNav";
import GroupDetails from '../components/GroupDetails';
import { BsChevronDoubleDown } from 'react-icons/bs';

const Explore = (props) => {
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
    }, [sortBy, detailsState])

    return (
        <div className="Main-container">
            <ExploreNav />
            <div className={detailsState}>
                
            </div>
            <div className="Item-container">
                <div className={itemState}>
                    <div className="Item-sort-container">
                        <label className="Item-sort-label">Sort: </label>
                        <select className="Item-sort-listbox" value={sortBy} onChange={handleSort}>
                            <option value="AZ">A - Z</option>
                            <option value="ZA">Z - A</option>
                        </select>
                    </div>
                    <div className="Item-back-arrow">
                        <BsChevronDoubleDown className="Chevron" />
                    </div>
                    <div></div>
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

export default Explore