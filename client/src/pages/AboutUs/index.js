import React from 'react';
import about from '../../assets/image/about.jpg';
import'./style.css';

function index() {
    return (
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className=''>
              <img src={about} alt="Image"/>
            </figure>
          </div>
          <div className="media-content">
            <div >
              <p className="textStyle">Your Time </p>
            </div>

          </div>
        </article>
      </div>
    )
}

export default index
