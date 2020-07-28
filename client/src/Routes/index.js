import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import EventPages from '../pages/EventPages';

import CreateEvent from '../pages/CreateEvent';
import DashboardEvents from '../pages/DashboardEvents';
import ViewEvents from '../pages/ViewEvents';
import EventCard from '../pages/DashboardEvents/EventCard';
import  Registration from '../pages/Registration';
const index = () => {
    return (
   
            <Switch>
                <Route path ='/dashboard'  component = {Dashboard} />          
                <Route path ='/event' component = {EventPages} />
                <Route path = '/createvent' component = {CreateEvent}/>
                <Route path='/eventpage' component={EventPages} />
                <Route path='/registration' component={Registration}/>
                <Route path ='/eventcard'eventcards component ={EventCard}/>
                <Route path='/viewevent/:id' component={ViewEvents} />
                <Route path='/dashboardevents' component={DashboardEvents} />
                <Route path ='/' exact component = {Login} />              
            </Switch>

  
    )
}

export default index;