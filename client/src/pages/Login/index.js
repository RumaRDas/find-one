import React, {useState} from 'react';
import Container from '../../components/Container';
import API from '../../services/API'
import './style.css'

const Login= ({history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async evt => {
        evt.preventDefault();
        console.log("result of submit", email, password);
        const response = await API.post('/api/login', { email, password })
        const userId = response.data._id || false;
        if (userId) {
            localStorage.setItem('user', userId)
            history.push('/dashboard')
        } else {
            const { message } = response.data
            console.log(message)
        }

    }

    return (
        <Container>
        <div>
            <div className="field" >
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-danger" type="email" placeholder="Your email" name ="email" id= "email" onChange={evt =>setEmail(evt.target.value)} />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                </div>y
            </div>
            <div className="field">
                <div className="control">
                    <input className="input" type="password" name="password" id="password" placeholder="Password" onChange={evt =>setPassword(evt.target.value)}  />
                </div>
            </div>
            <div className="control">
                <button className="button is-link" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
        </Container>
    )
}

export default Login;