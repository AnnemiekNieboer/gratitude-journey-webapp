import React, {useState} from 'react';
import "./Authorization.css";
import {useForm} from "react-hook-form";
import Button from "../button/Button";
import {Link} from "react-router-dom";

function Authorization() {
    const {register, handleSubmit} = useForm();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);


    const makeLoginRequest = async (data: {}) => {
        toggleError(false);
        toggleLoading(true);
        try {
            console.log(data)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit(makeLoginRequest)}>
                <label htmlFor="e-mail">
                    <input
                        className="login__input-field"
                        type="email"
                        id="e-mail"
                        {...register("e-mail")}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        className="login__input-field"
                        type="password"
                        id="e-mail"
                        {...register("password")}
                    />
                </label>
                <Button type="submit" text="Login" buttonClassName="button--dark"/>
                <div className="form--error">
                    {
                        error && <span>Username/password invalid, try again or register a new account</span>}
                    {
                        loading && <span>Logging in to your account, please wait...</span>
                    }

                </div>
            </form>
            <div className="modal__login--links">
                <span className="login__links--forgot-password"> <Link
                    to="/my-journey">I forgot my password</Link> </span>
                <span> - </span>
                <span className="login__links--register">No account? <Link to="/my-journey">Register here</Link> </span>
            </div>
        </>
    );
}

export default Authorization;