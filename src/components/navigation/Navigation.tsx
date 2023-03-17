import React from 'react';
import "./Navigation.css";
import NavigationLink from "./NavigationLink";
import myJourneyIcon from "../../assets/icons/my-journey.svg";
import boostIcon from "../../assets/icons/boost.svg";
import addGratitudeIcon from "../../assets/icons/add-gratitude.svg";
import travelLogIcon from "../../assets/icons/travel-log.svg";
import accountIcon from "../../assets/icons/my-account.svg";

const Navigation = () => {
    return (
        <div className="navigation__container">
            <div className="navigation__inner-container">
                <ul className="navigation__list">
                    <li>
                        <NavigationLink
                            linkTo="/my-journey"
                            icon={myJourneyIcon}
                            iconAltText="My-Journey-icon"
                            linkText="My Journey"/>
                    </li>
                    <li>
                        <NavigationLink
                            linkTo="/boost"
                            icon={boostIcon}
                            iconAltText="Boost-icon"
                            linkText="Boost"/>
                    </li>
                    <li>
                        <NavigationLink
                            centerLinkClassName="navigation__link--big"
                            centerIconClassName="navigation__icon--big" linkTo="/add-gratitude"
                            icon={addGratitudeIcon} iconAltText="Add-gratitude-icon"
                            linkText="Add gratitude"/>
                    </li>
                    <li>
                        <NavigationLink
                            linkTo="/travel-log"
                            icon={travelLogIcon}
                            iconAltText="Travel-log-icon"
                            linkText="Travel log"/>
                    </li>
                    <li>
                        <NavigationLink
                            linkTo="/my-account"
                            icon={accountIcon}
                            iconAltText="My-Account-icon"
                            linkText="Account"/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;