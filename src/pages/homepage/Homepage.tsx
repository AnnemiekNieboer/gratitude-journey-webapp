import React from 'react';
import "./Homepage.css";
import {useNavigate} from "react-router-dom";
import Button from "../../components/button/Button";
import Logo from "../../components/logo/Logo";
import Mountains from "../../components/mountains/Mountains";

const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div className="outer-container__reusable">
            <div className="inner-container__reusable">
                {/*<header>*/}
                {/*    <nav>*/}
                {/*        <NavLink to="/">Home</NavLink>*/}
                {/*        <NavLink to="/login">Login</NavLink>*/}
                {/*        <NavLink to="/my-journey">My Journey</NavLink>*/}
                {/*    </nav>*/}
                {/*</header>*/}
                <Logo logoClassName="logo--big"/>
                <div className="homepage__button">
                    <Button text="Start your Journey" onClick={() => {navigate("/login")}} buttonClassName="button--light"/>
                </div>
                <Mountains/>
            </div>

        </div>
    );
};

export default Homepage;