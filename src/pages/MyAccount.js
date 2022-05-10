import Navbar from "../components/Navbar"

const MyAccount = (props) => {

    return (
        <div className="My-account-container">
            <Navbar user = {props.user} currentUser = {props.currentUser} authenticated = {props.authenticated} handleLogout = {props.handleLogout} />
        </div>
    )
}

export default MyAccount