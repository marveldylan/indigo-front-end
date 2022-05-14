import { Link } from "react-router-dom"

const UserNav = () => {

    return (
        <header className="Explore-nav">
            <Link className="Explore-link" to="/create/group">Create Group</Link>
            <Link className="Explore-link" to="/create/channel">Create Channel</Link>
        </header>
    )
}

export default UserNav