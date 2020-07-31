import React from 'react';
import './style.css';

const RecipeItem = (props) => {
    const { name, image, ingredientLines } = props;
    return (

        <div className="column is-4-desktop " >

        <div className="box cardBack">
          <div className="card card-equal-height group box ">
            <div className="card-image">
              <figure className="image is-4by3 imgStyle">
              <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
              </figure>
  
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="h3">{name}</p>
                  
                </div>
                </div>
                <ul className="">
                    {
                        ingredientLines.map(ingredient => <li >{ingredient}</li>)
                    }
                </ul>
            </div>
              </div>
            </div>
          </div>   

    )

}

export default RecipeItem;