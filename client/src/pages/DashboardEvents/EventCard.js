import React, { useState, useEffect } from 'react';
import API from '../../services/API';
import moment from 'moment';
import { Link } from "react-router-dom";

function EventCard(props) {
  const user_id = localStorage.getItem('user_id');
  const user = localStorage.getItem('user');

  return (


    <div className="columns" >
      <div className="column is-12">
          <div className="card card-equal-height group box ">
              <div className="card-image">
                <figure className="image is-3by1 imgStyle">
                  <img style={{ backgroundImage: `url(${props.event.thumbnail_url})` }} className="deletBtn" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="h3">{props.event.title}</p>
                  </div>
            </div>
          </div>
          <div className="eventText">
            <span ><strong>Categories:</strong> {props.event.categories}</span>
            <br></br>
            <span > <strong>charges : $ </strong> {parseFloat(props.event.cost).toFixed(2)}</span>
            <br></br>
            <div className='wordWrap'><span> <strong>Descriptin :</strong>{props.event.description}</span></div>
            <p className="subtitle is-6 dateStyle">Contact No: {props.event.contact}</p>
          </div>
          <div className="card-footer" >
          {
            props.event.user === user_id ?
              <div className="flotRight">
                <button className="button deletButton" onClick={() => props.deleteEventHandler(props.event._id)} >Delete</button>
              </div>
              : ""
          }
          </div>
        </div>
  
        </div>

      </div>

  )
}

export default EventCard;

   // <div className="rightMr">
            // <Link to= {"/viewevent/"+ props.event._id} > <button className="button deletButton" >View</button></Link>
            // </div>
