import MyDetails from '../components/MyDetails'
import Nav from '../components/Nav'

const Navbar = (props) => {

    return (
        <div className="Navbar-container">
            <MyDetails user = {props.user} currentUser = {props.currentUser} authenticated = {props.authenticated} handleLogout = {props.handleLogout} />
            <Nav user = {props.user} authenticated = {props.authenticated} handleLogout = {props.handleLogout} />
        </div>
    )

}

export default Navbar