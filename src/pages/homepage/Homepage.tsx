import React from 'react';
import "./Homepage.css";
import {NavLink} from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/my-journey">My Journey</NavLink>
                </nav>
            </header>
        </div>
    );
};

export default Homepage;