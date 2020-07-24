import React from 'react';
import Container from '../../components/Container';
import EventPages from '../EventPages';
import './style.css';

const Dashboard = ({history}) => {
    
    const user_id =localStorage.getItem('user');
    console.log(user_id);

    return (
        <Container style={{ minHeight: "500pxs" }}>
        <div className="box1"> Event Pages </div>          
        </Container>
  

    )
}

export default Dashboard;