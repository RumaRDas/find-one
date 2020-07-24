import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import EventPages from '../pages/EventPages';
import Registration from '../pages/Registration';
import CreateEvent from '../pages/CreateEvent';

const index = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path ='/' exact component = {Login} />
                <Route path ='/dashboard' component = {Dashboard} />
                <Route path ='/event' component = {EventPages} />
                <Route path = '/createvent' component = {CreateEvent}/>
                <Route path='/registration' component={Registration} />
            </Switch>
        </BrowserRouter>
    )
}

export default index;