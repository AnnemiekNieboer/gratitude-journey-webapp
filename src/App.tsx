import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import MyJourney from "./pages/myJourney/MyJourney";
import Boost from "./pages/boost/Boost";
import AddGratitude from "./pages/addGratitude/AddGratitude";
import TravelLog from "./pages/travelLog/TravelLog";
import Account from "./pages/account/Account";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/my-journey" element={<MyJourney/>}/>
                <Route path="/boost" element={<Boost/>}/>
                <Route path="/add-gratitude" element={<AddGratitude/>}/>
                <Route path="/travel-log" element={<TravelLog/>}/>
                <Route path="/account" element={<Account/>}/>
            </Routes>
        </div>
    );
}

export default App;
