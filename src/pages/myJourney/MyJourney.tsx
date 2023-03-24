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
                    <div className="my-journey__art--items my-journey__art--item5">
                        <div className="item5__wave--container">
                            <div className="item5__wave"></div>
                            <div className="item5__wave item5__wave--2"></div>
                        </div>
                        <div className="item5__wave--container wave__container--2">
                            <div className="item5__wave"/>
                            <div className="item5__wave item5__wave--2"/>
                        </div>
                        <div className="item5__wave--container wave__container--3">
                            <div className="item5__wave"/>
                            <div className="item5__wave item5__wave--2"/>
                        </div>
                    </div>
                    <div className="my-journey__art--items my-journey__art--item6"/>
                    <div className="my-journey__art--items my-journey__art--item7">
                        <div className="item7__trees--container">
                            <div className="item7__tree">
                                <div className="item7__tree--greenery"/>
                                <div className="item7__tree--greenery item7__tree--greenery--2"/>
                                <div className="item7__tree--greenery item7__tree--greenery--3"/>
                            </div>
                            <div className="item7__tree item7__tree--2">
                                <div className="item7__tree--greenery"/>
                                <div className="item7__tree--greenery item7__tree--greenery--2"/>
                                <div className="item7__tree--greenery item7__tree--greenery--3"/>
                            </div>
                            <div className="item7__tree item7__tree--3">
                                <div className="item7__tree--greenery"/>
                                <div className="item7__tree--greenery item7__tree--greenery--2"/>
                                <div className="item7__tree--greenery item7__tree--greenery--3"/>
                            </div>
                        </div>
                    </div>
                    <div className="my-journey__art--items my-journey__art--item8">
                        <div className="my-journey__art--cloud item8__cloud1"/>
                    </div>
                    <div className="my-journey__art--items my-journey__art--item9">
                        <div className="item9__tent-line"/>
                        <div className="item9__tent-line item9__tent-line--right"/>
                    </div>
                    <div className="my-journey__art--items my-journey__art--item10">
                        <div className="item10__fire"/>
                    </div>
                    <div className="my-journey__art--items my-journey__art--item11"/>
                    <div className="my-journey__art--items my-journey__art--item12">
                        <div className="my-journey__art--cloud item12__cloud2"/>
                    </div>
                    <div className="my-journey__art--items my-journey__art--item13"/>
                    <div className="my-journey__art--items my-journey__art--item14"/>
                    <div className="my-journey__art--items my-journey__art--item15"/>
                    <div className="my-journey__art--items my-journey__art--item16"/>
                </div>
            </main>
        </div>
    );
};

export default MyJourney;