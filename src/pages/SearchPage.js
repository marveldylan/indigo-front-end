import Navbar from "../components/Navbar"

const SearchPage = (props) => {

    return (
        <div className="Search-container">
            <Navbar user = {props.user} authenticated = {props.authenticated} handleLogout = {props.handleLogout} />
        </div>
    )
}

export default SearchPage