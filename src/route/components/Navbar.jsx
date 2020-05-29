import React from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'

const Navbar = () => {


    return (
        <>
            <nav>
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/profile`}>Profile</Link></li>
                    <li><Link to={`/`} onClick={() => Cookies.remove('token') }>Logout</Link></li>
                    <li><Link to={`/register`}>Register</Link></li>
                    <li><Link to={`/login`}>Login</Link></li>
                </ul>
                
            </nav>
        </>
        );
}
export default Navbar