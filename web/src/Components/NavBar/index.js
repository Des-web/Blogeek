import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

export default function NavBar(){
    return(
        <header class="main-header">
            <div class="logo">
                <h4>Blogeek</h4>
            </div>
            <ul class="nav-links">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </header>
    )
}