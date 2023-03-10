import React from 'react';
import "./Login.css";
import Mountains from "../../components/mountains/Mountains";
import Logo from "../../components/logo/Logo";


function Login() {
    return (
        <div className="outer-container__reusable">
            <div className="inner-container__reusable">
                <Logo logoClassName="logo--small"/>
                <Mountains/>
            </div>

        </div>
    );
}

export default Login
