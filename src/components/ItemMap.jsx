import { useNavigate } from "react-router-dom";

const ItemMap = ({ items, basePath }) => {

    let navigate = useNavigate()


    const handleClick = (id) => {
        navigate(`${basePath}${id}`)
    }

        return (
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
        )
}

export default ItemMap