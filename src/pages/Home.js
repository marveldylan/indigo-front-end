import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import { GetUserById } from "../services/UserServices";


const Home = (props) => {

    const [currentUser, setUser] = useState({})
    const [navState, setNavState] = useState('Navbar-uncollapsed')
    const [homeState, setHomeState] = useState('Home-uncollapsed')


    useEffect(()=> {
        const handleUser = async (id) => {
            const data = await GetUserById(id)
            setUser(data.user)
            console.log(currentUser)
        }
        handleUser(props.user.id)
    }, [])

    return (
        <div className="Main-container">
            <Feed props={props} />
        </div>
    )
}

export default Home