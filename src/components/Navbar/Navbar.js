import React from 'react';
import './Navbar.scss';
import logo from '../../logo.png';
import {Link}from'react-router-dom'

export default function Navbar(){

    return(
        
    <nav className="navbar">
        
        <img src={logo} aæt='city tours logo' />
        <ul className="nav-links">
            <Link to='/'>
            <li>
                <a href="/" className="nav-link active">Home</a>
            </li>
            </Link>
            <Link to='/about'>
            <li>
                <a href="/" className="nav-link">About</a>
            </li>
            </Link>
            <Link to='/Tour'>
            <li>
                <a href="/" className="nav-link">Tours</a>
            </li>
            </Link>
        </ul>

    </nav>
    )
}
