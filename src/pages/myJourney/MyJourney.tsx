import React from 'react';
import "./MyJourney.css";
import Header from "../../components/header/Header";

const MyJourney = () => {
    return (
        <div className="outer-container__reusable">
            <Header/>
            <main className="inner-container__reusable my-journey__art-container--outer">
                <div className="my-journey__art-container--inner">
                    <div className="my-journey__art--items my-journey__art--item1"/>
                    <div className="my-journey__art--items my-journey__art--item2"/>
                    <div className="my-journey__art--items my-journey__art--item3"/>
                    <div className="my-journey__art--items my-journey__art--item4"/>
                    <div className="my-journey__art--items my-journey__art--item5"/>
                    <div className="my-journey__art--items my-journey__art--item6"/>
                    <div className="my-journey__art--items my-journey__art--item7"/>
                </div>
            </main>
        </div>
    );
};

export default MyJourney;