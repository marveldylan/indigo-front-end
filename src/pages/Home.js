import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import { GetUserById } from "../services/UserServices";


const Home = (props) => {

    const [currentUser, setUser] = useState({})

    const handleUser = async (id) => {
        const data = await GetUserById(id)
        setUser(data)
        console.log(data.user, 'data.user')
        console.log(data, 'data')
    }

    useEffect(()=> {
        const handleUser = async (id) => {
            const data = await GetUserById(id)
            setUser(data.user)
            console.log(currentUser.user)
        }
        handleUser(props.user.id)
    }, [])

    return (
        <div className="Home-container">
            <div className="Margin"></div>
            <Navbar user = {props.user} currentUser = {currentUser} authenticated = {props.authenticated} handleLogout = {props.handleLogout} />
            <Feed props={props} />
            <div className="Margin"></div>
        </div>
    )
}

export default Home