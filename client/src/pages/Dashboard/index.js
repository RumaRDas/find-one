import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Container from '../../components/Container';
import EventPages from '../EventPages';
import './style.css';

const Dashboard = ({history}) => {
    return (

        <Container style={{ minHeight: "500pxs" }}>
        <div className="box1"> Event Pages </div>          
        </Container>
  

    )
}

export default Dashboard;