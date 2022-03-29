import React, { useState } from 'react';
import "../assets/CSS/Login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from '../firebase/config';
import googleIcon from '../assets/SVG/Google__G__Logo.svg';
import Modal from "../components/Modal";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log("Singed in user: ", user);
                setMsg("Login Successfull");
                console.log("Login Successfull");
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log("An error occured: ", errorCode, errorMessage);
            });
    }

    const googleHandler = async (e) => {
        e.preventDefault();
        provider.setCustomParameters({ prompt: 'select_account' });
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                setMsg("Login Successfull");
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage + email);
            });
    };

    return (
        <div className="login">
            <Modal msg={msg} />
            <Link to='/'>
                <img className="login-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
            </Link>

            <div className="login-container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={signIn} className="login-signInButton" >Sign in</button>
                    <button onClick={googleHandler} className="login-registerButton" >
                        <img src={googleIcon} className="google-logo-icon" alt="Google logo" /> 
                        <p>Sign in with google</p>
                    </button>
                </form>
                <Link to='/resetPassword'>
                    <p>Reset Password</p>
                </Link>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            </div>
            <div className="register-new-container">
                <p className="register-new-label">New to Amazon?</p>
                <button onClick={e => { navigate('/register') }} className="login-registerButton" >Create your Amazon Account </button>
            </div>
        </div>
    )
}

export default Login;
