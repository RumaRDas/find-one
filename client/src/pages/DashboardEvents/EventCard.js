import React from 'react';
import moment from 'moment';

function EventCard(props) {
    return (
     
        <div className="column is-6" >
        <div className="box">
        <div className="columns">
        <div class="card ">       
    <div class="card-image">
      <figure class="image is-4by3">
        <img style={{ backgroundImage: `url(${props.event.thumbnail_url})` }} className="deletBtn"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <header ></header>
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{props.event.title}</p>
          <p class="subtitle is-6">Event Date: {moment(props.event.date).format('MMMM Do YYYY')}</p>
        </div>
      </div>
  
      <div class="content">
      <p class=" is-6">Event categories:{props.event.categories}</p>
     <p class=" is-6">gradient Cost: {parseFloat(props.event.Cost).toFixed(2)}</p>
     <p class="is-6">{props.event.description}</p>
        <time >Event Date: {moment(props.event.date).format('MMMM Do YYYY')}</time>
      </div>
    </div>
       
  </div>
  </div>
        </div>
        </div>
    )
}

export default EventCard
