import React from 'react';
import "./Navigation.css";
import {NavLink} from "react-router-dom";
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
                        <NavLink className={({ isActive }) => isActive ? "navigation__link--active" : "navigation__link"} to="/my-journey">
                            <img className="navigation__icon" src={myJourneyIcon} alt="My-Journey-icon"></img>
                            My Journey
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "navigation__link--active" : "navigation__link"} to="/boost">
                            <img className="navigation__icon" src={boostIcon} alt="Boost-icon"></img>
                            Boost
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "navigation__link--active navigation__link--big" : "navigation__link navigation__link--big"} to="/add-gratitude">
                            <img className="navigation__icon navigation__icon--big" src={addGratitudeIcon} alt="Add-gratitude-icon"></img>
                            Add gratitude
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "navigation__link--active" : "navigation__link"} to="/travel-log">
                            <img className="navigation__icon" src={travelLogIcon} alt="Travel-log-icon"></img>
                            Travel log
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "navigation__link--active" : "navigation__link"} to="/my-account">
                            <img className="navigation__icon" src={accountIcon} alt="My-Journey-icon"></img>
                            Account
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;