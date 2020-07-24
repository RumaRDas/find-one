import React from 'react';
import DashBoard from '../Dashboard'

const index = () =>{
    return (
        <div>
            <div className="field" >
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-danger" type="email" placeholder="Your email" name ="email" id= "email" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className="input" type="password" name="password" id="password" placeholder="Password" />
                </div>
            </div>
            <div className="control">
                <button className="button is-link">Submit</button>
            </div>
        </div>
    )
}

export default index;