import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { StyledLogin } from "./styled";
import { useAuth } from "../../contexts/authcontext";
import { useRef } from "react";

const Login = () => {
    const { login, getTokens } = useAuth();
    const username = useRef();
    const password = useRef();

    const handle = () => {
        login({
            username: username.current.value,
            password: password.current.value,
        });
    };


    return (
        <StyledLogin>
            <div className="head">
                <h1>Book Store</h1>
            </div>
            <div className="inps">
                <div className="inp">
                    <div>
                        <label htmlFor="aa">username:</label>
                        <input id="aa" ref={username} type="text" />
                    </div>
                </div>
                <div className="inp">
                    <div>
                        <label htmlFor="bb">password:</label>
                        <input id="bb" ref={password} type="text" />
                    </div>
                </div>
            </div>
            <div className="btn">
                <button onClick={handle}>login</button>
            </div>
            <div className="btn">
                <GoogleLogin
                    onSuccess={(cred) => {
                        getTokens(cred);
                        console.log(cred)
                    }}
                    onError={() => {
                        console.log("Login Failed");
                    }}
                />
            </div>
        </StyledLogin>
    );
};

export default Login;

