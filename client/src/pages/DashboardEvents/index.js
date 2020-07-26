import React, { useState, useEffect } from 'react';
import Container from '../../components/Container';
import API from '../../services/API';
import EventCard from './EventCard';
import cameraIcon from '../../assets/image/camera.png'
import moment from 'moment';
import './style.css';
import CreateEvent from '../CreateEvent';

const DashboardEvents = ({ history }) => {

  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false)
  const [success, SetSuccess] = useState(false);
  const user_id = localStorage.getItem('user');

  //  console.log(user_id)
  useEffect(() => {
    getEvents()

  }, [])

  const filterHandler = (query) => {
    setSelected(query)
    getEvents(query)
  }

  const myeventsHandler = async () => {
    setSelected("myevents")
    const response = await API.get(`./api/dashboard/user/events`, { headers: { user_id } })
    setEvents(response.data)
    console.log(response.data)
  }

  const deleteEventHandler = async (eventId) => {
    try {
      const deletevent = await API.delete(`./api/event/${eventId}`)
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


  const getEvents = async (filter) => {
    const url = filter ? `./api/dashboard/categories/${filter}` : `/api/dashboard`
    const response = await API.get(url, { headers: { user_id } })
    setEvents(response.data)
  }

  return (

    <>
      <div className="filter-panel buttonpad">
        <div className="buttons field has-addons ">
          <button className="button is-success is-outlined" onClick={() => filterHandler(null)} active={selected === null}>ALL Categories</button>
          <button className="button is-danger is-outlined" onClick={myeventsHandler} active={selected === "myevents"}>My Event</button>
          <button className="button is-success is-outlined" onClick={() => filterHandler("kids")} active={selected === "kids"}>Kids</button>
          <button className="button is-info is-outlined" onClick={() => filterHandler("audalt")} active={selected === "audalt"}>Audalt</button>
          <button className="button is-danger is-outlined" onClick={() => filterHandler("Indoor")} active={selected === "indoor"}>Indoor</button>
          <button className="button is-warning is-outlined" onClick={() => filterHandler("outdoor")} active={selected === "outdoor"}>Outdoor</button>
        </div>
      </div>
      <div className="columns">
      <div className="column is-9">
        <div className="columns is-multiline">
          {
            events.map(event => (
              <EventCard key={event._id} event={event} deleteEventHandler={deleteEventHandler} />
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
