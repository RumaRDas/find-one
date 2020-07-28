import React from 'react';
import Container from '../../components/Container';

import './style.css';

const Dashboard = ({history}) => {
    const user_id =localStorage.getItem('user_id');
    console.log(user_id);

    return (
        <Container style={{ minHeight: "500pxs" }}>
        <div className="box1" onClick={() => history.push('/eventpages')}> Event Pages </div>          
        </Container>
  

    )
}

export default Dashboard;