import React, { useState } from 'react';
import Container from '../../components/Container';
import { Link, Redirect } from "react-router-dom";
import API from '../../services/API'
import './style.css'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("false");
    const [success, SetSuccess] = useState(false);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        // console.log("result of submit", email, password);
        const response = await API.post('/api/login', { email, password })
        const user_id = response.data.user_id || false;
        const user = response.data.user || false;

        try {
            if (user && user_id) {
                localStorage.setItem('user', user)
                localStorage.setItem('user_id', user_id)
                SetSuccess(true);
            } else {
                const { message } = response.data
                setError(true)
                setErrorMessage(message)
            }

        } catch (error) {
            setError(true)
            setErrorMessage("Error, the server returned  an error")
        }
    }

    if (success) {
        return <Redirect to="/dashboard" />
    }

    return (
        <Container>
            <div >
                <h1 className="logHeader"> Login</h1>
                <div className="field" >
                    <div className="control">
                        <input className="input is-success" type="email" placeholder="Your email" name="email" id="email" onChange={evt => setEmail(evt.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input className="input is-warning" type="password" name="password" id="password" placeholder="Password" onChange={evt => setPassword(evt.target.value)} />
                    </div>
                </div>

                <div className="control">
                    <button className="submit-btn" onClick={handleSubmit}>Sign in</button>
                </div>
                <div className="control">
                    <Link className="login-btn" to='/registration' >Register</Link>
                </div>
                {error ? (
                    <div className="notification is-warning is-light login-validation">{errorMessage}</div>
                ) : ''}
            </div>
        </Container >

    )
}

export default Login;