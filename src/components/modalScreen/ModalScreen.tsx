import React from 'react';
import "./ModalScreen.css";

interface modalScreenProps {
    headerFirstLine: string;
    headerSecondLine: string;
    children?: React.ReactNode;
}

const ModalScreen = ({headerFirstLine, headerSecondLine, children}: modalScreenProps) => {


    return (
        <div className="modal__container">
            <div className="modal__header">
                <h1 className="modal__header--first-line">{headerFirstLine}</h1>
                <h2 className="modal__header--second-line">{headerSecondLine}</h2>
            </div>
            {children}
        </div>
    );
};

export default ModalScreen;