import React from 'react';
import Container from './components/Container';
import Routes from './Routes'
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <h1> Fun with Color</h1>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
