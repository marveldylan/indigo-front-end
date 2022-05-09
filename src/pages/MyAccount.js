import Navbar from "../components/Navbar"

const MyAccount = (props) => {

    return (
        <div className="My-account-container">
            <Navbar user = {props.user} authenticated = {props.authenticated} handleLogout = {props.handleLogout} />
        </div>
    )
}

export default MyAccount