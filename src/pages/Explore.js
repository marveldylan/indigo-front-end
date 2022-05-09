import Navbar from "../components/Navbar"

const Explore = (props) => {

    return (
        <div className="Explore-container">
            <Navbar user = {props.user} authenticated = {props.authenticated} handleLogout = {props.handleLogout} />
        </div>
    )
}

export default Explore