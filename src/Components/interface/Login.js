import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import {auth, providerGoogle} from '../../misc/firebase';
import {useStateValue} from '../../context/StateProvider';
import {actionTypes} from '../../reducer';

export default function Login() {

    const [{user}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(providerGoogle)
        .then(result => {
            console.log(result.user);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        })
        .catch(err => console.log(err.message));

    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.2/chrome-beta/chrome-beta_512x512.png" alt="logo google" />
                <h1>Identifiez vous pour accéder à cette application</h1>
                <Button variant="contained" color="primary" onClick={signIn}>
                    Se connecter avec google
                </Button>
            </div>
        </div>
    )
}
