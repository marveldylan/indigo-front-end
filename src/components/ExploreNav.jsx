import { Link } from "react-router-dom"

const ExploreNav = () => {

    return (
        <header className="Explore-nav">
            <Link className="Explore-link" to="/explore/">Categories</Link>
            <Link className="Explore-link" to="/explore/groups">Groups</Link>
            <Link className="Explore-link" to="/explore/channels">Channels</Link>
        </header>
    )
}

export default ExploreNav