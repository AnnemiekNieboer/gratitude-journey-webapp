import React from 'react';
import "./Navigation.css";
import {NavLink} from "react-router-dom";

interface navigationProps {
    linkTo: string;
    icon: string;
    iconAltText: string;
    linkText: string;
    centerLinkClassName?: string;
    centerIconClassName?: string;
}

const NavigationLink = ({linkTo, icon, iconAltText, linkText, centerLinkClassName, centerIconClassName}: navigationProps) => {


    return (
        <NavLink className={({ isActive }) => isActive ? `navigation__link--active ${centerLinkClassName}` : `navigation__link ${centerLinkClassName}`} to={linkTo}>
            <img className={`navigation__icon ${centerIconClassName}`} src={icon} alt={iconAltText}></img>
            {linkText}
        </NavLink>
    );
};

export default NavigationLink;