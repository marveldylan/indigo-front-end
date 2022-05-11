import { useEffect, useState } from 'react'
import MyDetails from '../components/MyDetails'
import Nav from '../components/Nav'

const Navbar = (props) => {

    useEffect(()=>{
        console.log('Navbar useEffect fired')
    }, [])
    return (
        <div className={props.navState}>
            <MyDetails user = {props.user} currentUser = {props.currentUser} authenticated = {props.authenticated} handleLogout = {props.handleLogout} />
            <Nav user = {props.user} authenticated = {props.authenticated} handleLogout = {props.handleLogout} />
        </div>
    )

}

export default Navbar