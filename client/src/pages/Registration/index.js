import React, { useState } from 'react';
import Container from '../../components/Container';
import { Link, Redirect } from 'react-router-dom';
import API from '../../services/API'
import './style.css';

function Registration({ history }) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [success, SetSuccess] = useState(false);

    const handleSubmit = async evt => {
        evt.preventDefault();

        if (
            email !== '' && password !== '' && firstName !== '' && lastName !== '') {
            const response = await API.post('/api/users', { firstName, lastName, email, password })

            if (response.status == 200) {
                console.log("Hello User")
                SetSuccess(true);

            } else {
                const { message } = response.data
                setError(true)
                setErrorMessage(message)
                setTimeout(() => {
                    setError(false)
                    setErrorMessage("")
                }, 2000)
            }
        }
        else {
            setError(true)
            setErrorMessage("You need to fill all the input")
            setTimeout(() => {
                setError(false)
                setErrorMessage("")
            }, 2000)
        }
    }

    if (success) {
        return <Redirect to="/" />
    }

    return (
        <Container>
            <div>
                <h1 className="regHeader"> Register</h1>
                <p>Please <strong>Register</strong> for a new account</p>
                <div className="field" >
                    <div className="control">
                        <input className="input is-warning" type="text" placeholder="First Name" name="firstName" id="firstName" onChange={evt => setFirstName(evt.target.value)} />
                    </div>
                </div>
                <div className="field" >
                    <div className="control">
                        <input className="input is-success" type="text" placeholder="Last Name" name="lastName" id="lastName" onChange={evt => setLastName(evt.target.value)} />
                    </div>
                </div>
                <div className="field" >
                    <div className="control">
                        <input className="input is-warning" type="email" placeholder="Your email" name="email" id="email" onChange={evt => setEmail(evt.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input className="input is-info" type="password" name="password" id="password" placeholder="Password" onChange={evt => setPassword(evt.target.value)} />
                    </div>
                </div>

                <div className="control">
                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                </div>

                <div className="control">
                    <Link className="login-btn" to='/'>Login</Link>
                </div>
                {error ? (
                    <div className="notification is-danger is-light event-validation"> {errorMessage}</div>
                ) : ''}
                {success ? (
                    <div className="notification is-success is-light event-validation"> You are Register now</div>
                ) : ''}
            </div>
        </Container>
    )
}


export default Registration;
