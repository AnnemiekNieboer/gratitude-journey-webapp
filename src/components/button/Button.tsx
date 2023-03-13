import React from 'react';
import "./Button.css";

interface ButtonProps {
    type: "button" | "submit" | "reset";
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    buttonClassName: string;
}

function Button({type, text, onClick, buttonClassName}:ButtonProps) {
    return (
        <button type={type} onClick={onClick} className={`button ${buttonClassName}`}>
            {text}
        </button>
    );
}

export default Button;