import { useEffect } from "react";
import { Link } from "react-router-dom";



const Nav = (props) => {

    useEffect(()=> {

    });

    return (
        <nav className="Nav-container">
            <Link className="Nav-link" to="/">Home</Link>
            <Link className="Nav-link" to="/search">Search</Link>
            <Link className="Nav-link" to="/library">My Library</Link>
            <Link className="Nav-link" to="/explore">Explore</Link>
            <Link className="Nav-link" onClick={props.handleLogout} to="/">Sign Out</Link>
        </nav>
    )
}

export default Nav;