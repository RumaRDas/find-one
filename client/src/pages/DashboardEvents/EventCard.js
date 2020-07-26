import React from 'react';
import moment from 'moment';

function EventCard(props) {
    return (
     
        <div className="column is-6 " >
        <div className="box cardBack">
        <div className="card ">       
    <div className="card-image">
      <figure className="image is-4by3 imgStyle">
        <img  style={{ backgroundImage: `url(${props.event.thumbnail_url})`}} className="deletBtn"/>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="h3">{props.event.title}</p>
          <p className="subtitle is-6">Event Date: {moment(props.event.date).format('MMMM Do YYYY')}</p>
        </div>
      </div>
  
      <div className="eventText">
      <span >Event categories:{props.event.categories}</span>
      <br></br>
     <span >gradient Cost: {parseFloat(props.event.Cost).toFixed(2)}</span>
     <br></br>
     <span>{props.event.description}</span>
      </div>
    </div>
       
  </div>
  </div>

        </div>
    )
}

export default EventCard
