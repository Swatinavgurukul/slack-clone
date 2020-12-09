import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from "./firebase"
import { useStateValue } from "./StateProvider";
import { actionTypes } from './reducer'
function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => {
            alert(error.message)
        })
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://cdn.dribbble.com/users/1238764/screenshots/5864612/slack-animation.gif" alt="" />
                <h1>Sign in to Navgurukul</h1>
                <p>navgurukul.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
