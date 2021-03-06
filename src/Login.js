import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {
    const signIn = () => {
        //sign in...
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => alert(error.message));

    };

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png" alt=""/>
                <img 
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
