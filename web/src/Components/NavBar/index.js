import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar(){
    return(
        <header>
            <div class="logo">
                <h4>The Nav</h4>
            </div>
            <ul class="nav-links">
                <li>
                    <Link to="/login">Login</Link>
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