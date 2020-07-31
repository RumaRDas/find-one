import React from 'react';
import about from '../../assets/image/about.jpg';
import './style.css';

function index() {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className=''>
            <img src={about} alt="Image" />
          </figure>
        </div>
        <div className="media-content">
          <div >
            <p className="textStyle">Your Time </p>
          </div>
          <p>Baby showers to birthday parties, plan or organize your own event today! From an engagement party for a new couple, to a study group for you and your friends, organize or advertise your own event using our website</p>

        </div>
      </article>
    </div>
  )
}

export default index
