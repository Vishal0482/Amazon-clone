import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebase/config";

function ResetPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // console.log("success");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log("An error has occured: ", errorCode, errorMessage);
            });
        navigate('/login');
    };

    return (
        <div className="login" >
            <Link to='/'>
                <img className="login-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
            </Link>
            <div className="login-container">
                <h1>Reset Password</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <button type="submit"
                        onClick={handleReset}
                        className="login-signInButton" >Reset Password</button>
                </form>
                <p>You will receive an email on given email address.</p>
            </div>
        </div>
    );
};

export default ResetPassword;
