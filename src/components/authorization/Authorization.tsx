import React, {useEffect, useState} from 'react';
import "./Authorization.css";
import {useForm} from "react-hook-form";
import Button from "../button/Button";
import {Link} from "react-router-dom";
import {supabase} from "../../lib/helper/supabaseClient";
import {UserResponse} from "@supabase/supabase-js";

type FormFields = {
    email: string,
    password: string
}

function Authorization() {

    const loginWithGoogle = async() => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                },
            },
        })
    };

    const [user, setUser] = useState<Promise<UserResponse>>();

    //Sign out function voor sign out button
    // async function signout() {
    //     const { error } = await supabase.auth.signOut()
    // }

    useEffect(() => {
        const session = supabase.auth.getSession();
        console.log(session);
        setUser(supabase.auth.getUser());

    },[])

    console.log(user)

    const {register, handleSubmit, formState: {errors}} = useForm<FormFields>({mode: "onChange"});
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
            <form className="login__form" onSubmit={handleSubmit(makeLoginRequest)}>
                <label htmlFor="email" className="form__label">
                    E-mail:
                </label>
                <input
                    className="login__input-field"
                    type="email"
                    id="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    {...register("email", {
                        required: "E-mail cannot be empty",
                        pattern: {
                            value: /^[a-z\d._%+-]+@[a-z\d.-]+\.[a-z]{2,4}$/,
                            message: "E-mail address is not valid",
                        }
                    })}
                />
                {errors.email && <span role="alert" className="form__input--alert">{errors.email.message}</span>}
                <label htmlFor="password" className="form__label">
                    Password:
                </label>
                <input
                    className="login__input-field"
                    type="password"
                    id="password"
                    aria-invalid={errors.password ? "true" : "false"}
                    {...register("password", {
                        required: "Password cannot be empty"
                    })}
                />
                {errors.password && <span role="alert" className="form__input--alert">{errors.password.message}</span>}
                <Button type="submit" text="Login" buttonClassName="button--dark"/>
                <div className="form--error">
                    {
                        error && <span>Username/password invalid, try again or register a new account</span>}
                    {
                        loading && <span>Logging in to your account, please wait...</span>
                    }

                </div>
            </form>

            <Button onClick={loginWithGoogle} type="submit" text="Login with Google" buttonClassName="button--dark"/>

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