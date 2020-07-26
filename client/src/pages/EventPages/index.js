import React, { useState, useEffect } from 'react';
import Container from '../../components/Container'
import API from '../../services/API'
import moment from 'moment';
import './style.css';

const EventPages = ({history}) => {

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
      <div className="filter-panel">
        <div className="buttons field has-addons ">
          <button className="button is-warning" onClick={() => filterHandler(null)} active={selected === null}>ALL Categories</button>
          <button className="button is-danger" onClick={myeventsHandler} active={selected === "myevents"}>My Event</button>
          <button className="button is-success" onClick={() => filterHandler("red")} active={selected === "red"}>Red</button>
          <button className="button is-info" onClick={() => filterHandler("blue")} active={selected === "blue"}>Blue</button>
          <button className="button is-danger" onClick={() => filterHandler("black")} active={selected === "black"}>Black</button>
        </div>
        <button className="button is-dark" onClick={() => history.push("/createvent")} >Back</button>
      </div>
      <div>
        <ul className="gradient-list">
          {
            events.map(event => (
              <li key={event._id}>
                <header style={{ backgroundImage: `url(${event.thumbnail_url})` }}>
                  {
                  event.user === user_id ?
                      <div>
                        <button className="button is-danger is small"  onClick={() => deleteEventHandler(event._id)} >Delete</button>
                      </div>
                      : ""
                  }
                </header>
                <strong>{event.title}</strong>
                <span>Event Date: {moment(event.date).format('MMMM Do YYYY')}</span>
                <span>Event categories:{event.categories}</span>
                <span> gradient Cost: {parseFloat(event.Cost).toFixed(2)}</span>
                <span>{event.description}</span>
                <button className="button is-small is-dark ">Subscribe</button>


              </li>
            )
            )
          }

        </ul>
      </div>
    </>

  )
}

export default EventPages;
