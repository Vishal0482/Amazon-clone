import React, { useState } from 'react';
import "../assets/CSS/Login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Modal from '../components/Modal';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [msg, setMsg] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();
    
    const register = (e) => {
        e.preventDefault();

        if(password != confirmPassword){
            setMsg("Please Check password");
            console.log("check");
        }

        if(password === confirmPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log("Registered user: ", user);
                setEmail("");
                setPassword("");
                navigate('/login');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log("Error ocured: ", errorCode, errorMessage);
            });
            setMsg("Register Successfull");
        }
    }
    return (
        <div className="login">
            {msg!="" && <Modal msg={msg}/>}
            <Link to='/'>
                <img className="login-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
            </Link>

            <div className="login-container">
                <h1>Register</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} /> 
                    <h5>Confirm Password</h5>
                    <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    
                <button
                    onClick={register}
                    className="login-registerButton" >Create your Amazon Account</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

            </div>
        </div>
    )
}

export default Register;
