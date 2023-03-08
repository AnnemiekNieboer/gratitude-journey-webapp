import React from 'react';
import "./Button.css";

interface ButtonProps {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    buttonClassName: string;
}

function Button({text, onClick, buttonClassName}:ButtonProps) {
    return (
        <button type={"button"} onClick={onClick} className={`button ${buttonClassName}`}>
            {text}
        </button>
    );
}

export default Button;