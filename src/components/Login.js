import React, { useState } from 'react';
import "../assets/CSS/Login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();
    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log("Singed in user: ", user);
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log("An error occured: ", errorCode, errorMessage);
            });
    }

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log("Registered user: ", user);
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log("Error ocured: ", errorCode, errorMessage);
            });
    }
    return (
        <div className="login">
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
                    <button type="submit"
                        onClick={signIn}
                        className="login-signInButton" >Sign in</button>
                </form>
                <Link to='/resetPassword'>
                    <p>Reset Password</p>
                </Link>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <button
                    onClick={register}
                    className="login-registerButton" >Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
