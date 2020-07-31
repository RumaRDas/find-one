import React from 'react';
import Container from '../../components/Container';
import event from '../../assets/image/events.jpg';
import photo from '../../assets/image/photo.jpg';
import about from '../../assets/image/about.jpg';
import { Link } from 'react-router-dom';
import './style.css';

const Dashboard = () => {
    const user_id = localStorage.getItem('user_id');

    return (
        <Container style={{ minHeight: "600px" }}>
            <div className="columns bactDash">
                <div className="column is-4">
                    <Link to='/dashboardevents'>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={event} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title headerStyle">Products</p>
                                    </div>
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris.
                            </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="column is-4 ">
                    <Link to="#">
                        <div className="card  backColor">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content headerStyle">
                                        <p className="title headerStyle">Images</p>
                                    </div>
                                </div>
                           
                                <div className="content">
                                   
                                <h3> Future Plane</h3>
                            </div>
                            </div>
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={photo} alt="Placeholder image" />
                                </figure>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="column is-4">
                    <Link to="#">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={about} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title headerStyle">Recipies</p>
                                    </div>
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris.
                            </div>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </Container>


    )
}

export default Dashboard;