import Navbar from "../components/Navbar"

const MyLibrary = (props) => {

    return (
        <div className="My-library-container">
            <Navbar user = {props.user} currentUser = {props.currentUser} authenticated = {props.authenticated} handleLogout = {props.handleLogout} />
        </div>
    )
}

export default MyLibrary