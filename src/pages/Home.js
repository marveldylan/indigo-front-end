import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';


const Home = (props) => {


    return (
        <div className="Home-container">
            <div className="Margin"></div>
            <Navbar user = {props.user} authenticated = {props.authenticated} handleLogout = {props.handleLogout} />
            <Feed props={props} />
            <div className="Margin"></div>
        </div>
    )
}

export default Home