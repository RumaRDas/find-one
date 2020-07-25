import React from 'react';
import { Link } from 'react-router-dom';
import Container1 from '../Container1'

import './style.css'

function Navbar() {
  return (
    <div className="navStyle">
      <Container1>
        <nav className="navbar " role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
      </Link>
              <Link className="navbar-item" to='/eventpage'>
                Event
      </Link>

              <Link className="navbar-item" to="#">
                Images
</Link>
              <Link className="navbar-item" to="#">
                About Us
</Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">

                  <Link className="button purple-btn" to="/registration">Sign up</Link>

                  <Link className="button pink-btn" to="/login">
                    Log in
          </Link>
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
