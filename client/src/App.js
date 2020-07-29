import React from 'react';
import Container from './components/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './Routes'
import './style/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Router>
    <Hero/>
    <Navbar/>
    <Container>
      <div className="content">
        <Routes />
      </div>
    </Container>
    <Footer/>
    </Router>
  </div>
  );
}

export default App;
