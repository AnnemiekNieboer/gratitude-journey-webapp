import React from 'react';
import "./Login.css";
import Mountains from "../../components/mountains/Mountains";
import Logo from "../../components/logo/Logo";
import ModalScreen from "../../components/modalScreen/ModalScreen";
import Authorization from "../../components/authorization/Authorization";


const Login = () => {
    return (
        <div className="outer-container__reusable">
            <div className="inner-container__reusable">
                <Logo logoClassName="logo--small"/>
                <ModalScreen headerFirstLine="Hey, ho, let's go!" headerSecondLine="Login & start your gratitude journey">
                    <Authorization/>
                </ModalScreen>
                <Mountains/>
            </div>

        </div>
    );
}

export default Login
