import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import EventPages from '../pages/EventPages';

import CreateEvent from '../pages/CreateEvent';
import DashboardEvents from '../pages/DashboardEvents';
import ViewEvent from '../pages/ViewEvent';
import EventCard from '../pages/DashboardEvents/EventCard';
import AboutUs from '../pages/AboutUs';
import Recipies from '../pages/Recipies/Recipies';
import  Registration from '../pages/Registration';

const index = () => {
    return (
   
            <Switch>
                <Route path ='/' exact component = {Login} />  
                <Route path ='/dashboard'  component = {Dashboard} />          
                <Route path ='/event' component = {EventPages} />
                <Route path = '/createvent' component = {CreateEvent}/>
                <Route path='/eventpage' component={EventPages} />
                <Route path='/registration' component={Registration}/>
                <Route path ='/eventcard'eventcards component ={EventCard}/>
                <Route path='/viewevent/:id' component={ViewEvent} />
                <Route path='/dashboardevents' component={DashboardEvents} />
                <Route path = '/aboutus' component={AboutUs}/>
                <Route path = '/recipies' component={Recipies}/>
        
                      
            </Switch>

  
    )
}

export default index;