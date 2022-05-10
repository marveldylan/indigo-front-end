import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import { GetUserById } from "../services/UserServices";


const Home = (props) => {

    const [currentUser, setUser] = useState({})
    const [navState, setNavState] = useState('Navbar-uncollapsed')
    const [homeState, setHomeState] = useState('Home-uncollapsed')

    const handleNav = () => {
        if(navState === 'Navbar-uncollapsed'){
            setNavState('Navbar-collapsed')
            setHomeState('Home-collapsed')
            console.log(navState, homeState)
        } else  if (navState === 'Navbar-collapsed') {
            setNavState('Navbar-uncollapsed')
            setHomeState('Home-uncollapsed')
            console.log(navState, homeState)
        }
    }

    useEffect(()=> {
        const handleUser = async (id) => {
            const data = await GetUserById(id)
            setUser(data.user)
            console.log(currentUser)
        }
        handleUser(props.user.id)
    }, [])

    return (
        <div className={homeState}>
            <div className="Margin"></div>
                <div className="Nav-wrapper">
                    <div className="Nav-collapse">
                        <button onClick={()=>handleNav()}>Collapse</button>
                    </div>
                    <Navbar 
                        user = {props.user} 
                        currentUser = {currentUser} 
                        authenticated = {props.authenticated} 
                        handleLogout = {props.handleLogout} 
                        navState = {navState}
                    />
                </div>
            <Feed props={props} />
            <div className="Margin"></div>
        </div>
    )
}

export default Home