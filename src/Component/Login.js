import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import '../component_css/Login.css';
import { login } from '../features/userSlice';
import { auth, provider } from './firebase';
function Login() {
    const dispatch = useDispatch();
    const src = "https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg";
    const signIn = () => {
        auth.signInWithRedirect(provider)
            .then((user) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    emailVerified: user.emailVerified,
                })
                )

            })
            .catch(error => alert(error.message))
    }
    // if (user !== null) {
    //     user.providerData.forEach((profile) => {
    //         console.log("Sign-in provider: " + profile.providerId);
    //         console.log("  Provider-specific UID: " + profile.uid);
    //         console.log("  Name: " + profile.displayName);
    //         console.log("  Email: " + profile.email);
    //         console.log("  Photo URL: " + profile.photoURL);
    //     });
    // }
    return (
        <div className="login">
            <div className="login_container">
                <img src={src}
                    alt="gmail_logo" />
                <Button onClick={signIn} variant="contained" color="primary">Login</Button>
            </div>
        </div>
    )
}

export default Login
