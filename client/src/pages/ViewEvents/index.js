import React from 'react';
import Container from '../../components/Container'
import moment from 'moment';
import './style.css';

const ViewEvents = ({props}) => {


    return (
        <div className="column  " >
        <div className="box cardBack">
          <div className="card card-equal-height group box ">
            <div className="card-image">
              <figure className="image is-4by3 imgStyle">
                <img style={{ backgroundImage: `url(${props.event.thumbnail_url})` }} className="deletBtn" />
              </figure>
            
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="h3">{props.event.title}</p>
                  <p className="subtitle is-6 dateStyle">Event Date: {moment(props.event.date).format('MMMM Do YYYY')}</p>
                </div>
              </div>
  
              <div className="eventText">
                <span ><strong>Event categories:</strong> {props.event.categories}</span>
                <br></br>
                <span > <strong> Entry Fee:</strong> {parseFloat(props.event.cost).toFixed(2)}</span>
                <br></br>
                <div className='wordWrap'><span>{props.event.description}</span></div>
              </div>
            </div>
            <div className="card-footer" >  
          </div>
          </div>
        </div>
  
      </div>
    )
}

export default ViewEvents;
