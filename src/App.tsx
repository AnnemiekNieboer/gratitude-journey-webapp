import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import MyJourney from "./pages/myJourney/MyJourney";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/my-journey" element={<MyJourney/>}/>
            </Routes>
        </div>
    );
}

export default App;
