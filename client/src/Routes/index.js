import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import EventPages from '../pages/EventPages';
import Registration from '../pages/Registration';
import CreateEvent from '../pages/CreateEvent';
import DashboardEvents from '../pages/DashboardEvents';
import Navbar from '../components/Navbar';


const index = () => {
    return (

            <Switch>
                <Route path ='/login'  component = {Login} />          
                <Route path ='/event' component = {EventPages} />
                <Route path = '/createvent' component = {CreateEvent}/>
                <Route path='/registration' component={Registration} />
                <Route path='/eventpage' component={EventPages} />
                <Route path='/navbar' component={Navbar} />
                <Route path='/dashboardevents' component={DashboardEvents} />
                <Route path ='/' exact component = {Dashboard} />
            </Switch>
  
    )
}

export default index;