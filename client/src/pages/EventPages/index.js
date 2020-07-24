import React, { useState, useEffect } from 'react';
import Container from '../../components/Container'
import './style.css';

const EventPages = () => {
    return (

        <>
          <div className="filter-panel">
            <div className="buttons field has-addons ">
              <button className="button is-warning"  >ALL Color</button>
              <button className="button is-danger" >My Gradieny</button>
              <button className="button is-success" >Red</button>
              <button className="button is-info" >Blue</button>
              <button className="button is-danger" >Black</button>
            </div>
            <button className="button is-dark"  >Back</button>
          </div>
          <div>
            <ul className="gradient-list">
           <li>
                    <header className="deletBtn">                
                          <div>
                            <button className="button is-danger is small">Delete</button>
                          </div>
                    </header>
                    <strong>{gradient.title}</strong>
                    <span>Gradient Date: </span>
                    <span> Gradient Top:</span>
                    <span> gradient price:</span>
                    <span></span>
                    <button className="button is-small is-dark ">Subscribe</button>
   
                  </li>

            </ul>
                   </div>
        </>
    
      )
    }
    


export default EventPages;
