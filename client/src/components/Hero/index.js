import React from 'react';
import Container1 from '../Container1';
import logo from '../../assets/image/logo-1.png'
import './style.css'

function Hero() {
    return (
        <div className="heroBack">
            <Container1>
            <div>
                <img  src={logo} alt="logo"/>
                </div>
                </Container1 >
                </div>

    )
}

export default Hero
