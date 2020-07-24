import React, {useState} from 'react';
import API from '../../services/API'
import './style.css';

function Registration() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <div className="field" >
                <div className="control">
                    <input className="input is-danger" type="text" placeholder="First Name" name="firstName" id="firstName"  />
                </div>
            </div>
            <div className="field" >
                <div className="control">
                    <input className="input is-success" type="text" placeholder="Last Name" name="lastName" id="lastName"/>
                </div>
            </div>
            <div className="field" >
                <div className="control">
                    <input className="input is-danger" type="email" placeholder="Your email" name="email" id="email"  />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className="input is-info" type="password" name="password" id="password" placeholder="Password"  />
                </div>
            </div>
            <div className="control">
                <button className="button is-link" >Submit</button>
            </div>
        </div>
    )
}

export default Registration;
