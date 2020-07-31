import React, { useState, useEffect } from 'react';
import Container from '../../components/Container';
import API from '../../services/API';
import { Link, Redirect, useParams } from "react-router-dom";
import moment from 'moment';
import './style.css';

const ViewEvent = (props) => {

  const [events, setEvents] = useState([]);
  const user = localStorage.getItem('user');
  const user_id = localStorage.getItem('user_id');
  const [error, setError] = useState(false)
  const [success, SetSuccess] = useState(false);

  const { eventId } = useParams()
  console.log(eventId)
  useEffect(() => {
    viewEvent()
  }, [])

  const viewEvent = async (eventId) => {
    try {
      const response = API.get(`./api/dashboard/${eventId}`, { headers: { user: user } })
      console.log(eventId)
        setEvents(response.data.events)
    } catch (error) {
    }
  }
  return (
    <div className="column  " >
      <div className="box cardBack ">
        <div className="card card-equal-height group box ">
          <div className="card-image">
            <figure className="image is-4by3 imgStyle">
              <img style={{ backgroundImage: `url(${events.thumbnail_url})` }} className="deletBtn" />
            </figure>

          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="h3">{events.title}</p>
                <p className="subtitle is-6 dateStyle">Event Date: {moment(events.date).format('MMMM Do YYYY')}</p>
              </div>
            </div>

            <div className="eventText">
              <span ><strong>Event categories:</strong> {events.categories}</span>
              <br></br>

              <br></br>
              <div className='wordWrap'><span>{events.description}</span></div>
            </div>
          </div>
          <div className="card-footer" >
          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewEvent;
