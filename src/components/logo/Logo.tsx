import React from 'react';
import "./Logo.css";

interface LogoProps {
    logoClassName: string;
}

const Logo = ({logoClassName}: LogoProps) => {
    return (
        <header className={`logo ${logoClassName}`}>
            <div className="logo__text--first-line">Gratitude</div>
            <div className="logo__text--second-line">Journey</div>
        </header>
    );
};

export default Logo;