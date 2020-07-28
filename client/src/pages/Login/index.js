import React, {useState} from 'react';
import Container from '../../components/Container';
import API from '../../services/API'
import './style.css'

const Login= ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("false");

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
              //  localStorage.setItem('user_id', user_id)
                history.push('/dashboard')
            } else {
                const { message } = response.data
                setError(true)
                setErrorMessage(message)
                setTimeout(() => {
                    setError(false)
                    setErrorMessage("")
                }, 2000)
            }

        } catch (error) {
            setError(true)
            setErrorMessage("Error, the server returned  an error")

        }
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
                    <button className="login-btn" onClick={() => history.push('/registration')}>Register</button>
                </div>
            {error ? (
                <div className="notification is-warning is-light login-validation">{errorMessage}</div>
            ) : ''}
            </div>
            </Container >

    )
}

export default Login;