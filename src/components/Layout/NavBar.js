import React from 'react';
import { NavLink } from 'react-router-dom';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Rules from '../Rules/Rules';
import './NavBar.css'

const NavBar = ({ currentUser, setCurrentUser, logout }) => {
    const links = (
        <>
            <nav className="nav-bar">
                <div className="left-menu">
                    <NavLink className="NavLink" exact to ='/'>Home</NavLink>
                    <NavLink className="NavLink" to ='/game'>Play!</NavLink>
                </div>
                <div className="right-menu">
                    <Rules />
                    <Login currentUser={ currentUser } setCurrentUser={ setCurrentUser }/>
                    <Register currentUser={ currentUser } setCurrentUser={ setCurrentUser }/>
                </div>
            </nav>
        </>
    )

    const authLinks = (
        <>
            <nav className="nav-bar">
                <div className="left-menu">
                    <NavLink className="NavLink" exact to ='/'>Home</NavLink>
                    <NavLink className="NavLink" to ='/game'>Play!</NavLink>
                </div>
                <div className="right-menu">
                    <Rules />
                    <NavLink className="NavLink" to='/profile' >Profile</NavLink>
                    <NavLink className="NavLink" to='/deck' currentUser={ currentUser }>Deck</NavLink>
                    <li className="logout">
                        <span onClick={ logout }>Logout</span>
                    </li>
                </div>
            </nav>
        </>
    )

    return (
        <>
            { currentUser ?  authLinks : links }        
        </>
    )
}

export default NavBar;