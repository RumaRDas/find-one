import React, { useState, useEffect } from 'react';
import Container from '../../components/Container';
import API from '../../services/API';
import EventCard from './EventCard';
import cameraIcon from '../../assets/image/camera.png';
import { Link } from "react-router-dom";
import moment from 'moment';
import './style.css';
import CreateEvent from '../CreateEvent';
import ViewEvents from '../ViewEvents';

const DashboardEvents = ({ history }) => {

  const [events, setEvents] = useState([]);
  const user = localStorage.getItem('user');
  const user_id = localStorage.getItem('user_id');
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false)
  const [success, SetSuccess] = useState(false);


  //  console.log(user_id)
  useEffect(() => {
    getEvents()
  }, [])

  const filterHandler = (query) => {
    setSelected(query)
    getEvents(query)
  }

  const myeventsHandler = async () => {
    try {
      setSelected("myevents")
      const response = await API.get(`./api/dashboard/user/events`, { headers: { user: user } })
      setEvents(response.data.events)
    } catch (error) {
      history.push('/');
    }
  }

  const getEvents = async (filter) => {
    try {
      const url = filter ? `./api/dashboard/categories/${filter}` : `/api/dashboard`
      const response = await API.get(url, { headers: { user: user } })
      setEvents(response.data.events)

    } catch (error) {
      history.push('/');
    }

  }
  const deleteEventHandler = async (eventId) => {
    try {
      await API.delete(`./api/event/${eventId}`,{ headers: { user: user }} )
      SetSuccess(true)
      setTimeout(() => {
        SetSuccess(false)
        filterHandler(null)
      }, 2500)
    } catch (error) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000)
    }
  }

  // const EventByIdHandler = async (eventId) => {
  //   const response = await API.get(`./api/dashboard/${eventId}`)
  //   setEvents(response.data);
  //   //console.log(response.data)
  // }

  return (

    <>
      <div className="filter-panel buttonpad">
        <div className="buttons field has-addons ">
          <button className="button is-success is-outlined" onClick={() => filterHandler(null)} active={selected === null}>ALL Categories</button>
          <button className="button is-danger is-outlined" onClick={myeventsHandler} active={selected === "myevents"}>My Event</button>
          <button className="button is-success is-outlined" onClick={() => filterHandler("kids")} active={selected === "kids"}>Kids</button>
          <button className="button is-info is-outlined" onClick={() => filterHandler("adult")} active={selected === "adult"}>Adult</button>
          <button className="button is-danger is-outlined" onClick={() => filterHandler("indoor")} active={selected === "indoor"}>Indoor</button>
          <button className="button is-warning is-outlined" onClick={() => filterHandler("outdoor")} active={selected === "outdoor"}>Outdoor</button>
        </div>
      </div>
      <div className="columns">
        <div className="column is-9">
          <div className="columns is-multiline">
            {
              events.map(event => (
                <EventCard key={event._id} event={event} deleteEventHandler={deleteEventHandler}>
                </EventCard>
              )
              )
            }
          </div>
        </div>
        <div className="column is-3 rightBack">
          <CreateEvent />
        </div>

      </div>
    </>
  )
}
export default DashboardEvents;
