import React from 'react';
import "./MyJourney.css";
import Logo from "../../components/logo/Logo";
import Navigation from "../../components/navigation/Navigation";

const MyJourney = () => {
    return (
        <div className="outer-container__reusable">
            <header className="inner-container__reusable">
                <Logo logoClassName="logo--small"/>
                <Navigation/>
            </header>
        </div>
    );
};

export default MyJourney;