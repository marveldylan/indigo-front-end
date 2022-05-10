import { useNavigate } from "react-router-dom";


const MyDetails = ({ currentUser }) => {
    let navigate = useNavigate()

    const handleClick = () => {
        navigate('/account')
    }

    return (
        <div className="My-details-container">
            <div className="My-details-images">
                {
                    (currentUser.cover_image) ?
                    <img className="My-details-cover-image" src={currentUser.cover_image}  />
                    : <img className="My-details-cover-image" src=""/>
                }
                {
                    (currentUser.profile_image) ?
                    <img className="My-details-profile-image" src={currentUser.profile_image} />
                    : <img className="My-details-profile-image" src="" />
                }                     
            </div>
            <div className="My-details-info">
                <h4 className="My-details-greeting">Hey, <span><a className="Highlighted" onClick={()=>handleClick()}>{currentUser.first_name}</a></span></h4>
            </div>
        </div>
    )
}

export default MyDetails;