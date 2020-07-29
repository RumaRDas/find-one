import React from 'react';
import { Link } from 'react-router-dom';
import Container1 from '../Container1'

import './style.css'

function Navbar({ history }) {
  const user_id = localStorage.getItem('user');
  const [isActive, setisActive] = React.useState(false);

  const logOut = (user, user_id) => {
    try {
      localStorage.removeItem('user')

      history.push('/')

    } catch (error) {

    }

  }

  return (
    <div className="navStyle">
      <Container1>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a
              onClick={() => {
                setisActive(!isActive);
              }}
              role="button"
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div
            id="navbarBasicExample"
            className={`navbar-menu ${isActive ? "is-active" : ""}`}
          >
            <div className="navbar-start">
              <Link className="navbar-item" to="/dashboard"> Home</Link>
              <Link className="navbar-item" to="aboutus"> About Us</Link>
              <Link className="navbar-item" to='/dashboardevents'> Event</Link>
              <Link className="navbar-item" to="#">Images</Link>
           

            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link className="button purple-btn" to="/registration">Sign up</Link>
                  <Link className="button pink-btn" to="/">Log Out</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Container1>
    </div>

  )
}

export default Navbar
