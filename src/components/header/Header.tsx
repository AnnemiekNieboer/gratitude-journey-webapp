import React from 'react';
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="inner-container__reusable">
            <Logo logoClassName="logo--small"/>
            <Navigation/>
        </header>
    );
};

export default Header;