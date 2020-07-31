import React, { useState, useMemo, useEffect } from 'react';
import Container from '../../components/Container';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import cameraIcon from '../../assets/image/camera.png';
import { Link, Redirect } from 'react-router-dom';
import { Dropdown } from 'react-bulma-components';
import API from '../../services/API';
import './style.css';

const CreateEvent = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState("");
    const [contact, setContact] = useState("");
    const [categories, setCategories] = useState("")
    const [thumbnail, setThumbnail] = useState(null);
    const [error, setError] = useState(false)
    const [success, SetSuccess] = useState(false);
    const [event, setEvent] = useState();
    const user = localStorage.getItem('user');


    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    const submitHandler = async (evt) => {
        evt.preventDefault();

        const eventData = new FormData();

        eventData.append('thumbnail', thumbnail)
        eventData.append('categories', categories)
        eventData.append('title', title)
        eventData.append('cost', cost)
        eventData.append('description', description)
        eventData.append('contact', contact)

        try {
            if (
                title !== '' &&
                categories !== '' &&
                cost !== "" &&
                contact !== "" &&
                thumbnail !== null &&
                description !== ''
            ) {
                const response = await API.post("./api/event", eventData, { headers: { user } });
                if (response.status == 200) {
                    SetSuccess(true)
                    setEvent(response.eventData);
                    return <Redirect to="/dashboardevent" />
                }
                else {
                    setError(true)
                }
            }
        } catch (error) {
            Promise.reject(error);
            setError(true);
        }
    }

    const CatagoryEventHandler = (categories) => {
        setCategories(categories)
    }

    return (

        <Container className="back">
            <div>
                <h1 className="eveHeader"> Create Your Advertise</h1>
                <div className="formAli">
                    <div className="field">
                        <label className="label">Upload Your Image</label>
                        <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }} className={thumbnail ? 'has-thumbnail' : ''}>
                            <div className="file is-info has-name">
                                <input className="file-input" type="file" onChange={evt => setThumbnail(evt.target.files[0])} />
                                <img src={cameraIcon} style={{ maxWidth: "50px" }} alt="upload img icon" />
                            </div>
                        </label>
                    </div>
                    <div className="field">
                        <label className="label">Categories</label>
                        <div className="control columns is-gapless">
                            <div className="column is-four-fifths">
                                <input className="input" id="Categories" type="text" placeholder={'Categories Name'} value={categories} onChange={evt => setCategories(evt.target.value)} />
                            </div>
                            <div className="column">
                                <Dropdown trigger="Choose">
                                    <a className="navbar-item" onClick={() => CatagoryEventHandler('partihire')}> Parti Hire</a>
                                    <a className="navbar-item" onClick={() => CatagoryEventHandler('catering')}>  Catering</a>
                                    <a className="navbar-item" onClick={() => CatagoryEventHandler('garden')}>  Garden</a>
                                    <a className="navbar-item" onClick={() => CatagoryEventHandler('beauty')}> Beauty </a>
                                </Dropdown>
                            </div>

                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Business Name</label>
                        <div className="control">
                            <input className="input" id="title" type="text" placeholder={'Business Title'} value={title} onChange={evt => setTitle(evt.target.value)} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Charges</label>
                        <div className="control">
                            <input className="input is-success" type="Number" placeholder={' Charges $0.00'} value={cost} id="cost" onChange={evt => setCost(evt.target.value)} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Contact No</label>
                        <div className="control">
                            <input className="input is-success" type="text" placeholder={'Contact No'} value={contact} id="contact" onChange={evt => setContact(evt.target.value)} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea className="textarea" placeholder={'Event description'} value={description} id="description" onChange={evt => setDescription(evt.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="control">
                        <button className="submit-btn" onClick={submitHandler}>Create </button>
                    </div>
                    <div className="control">
                        <Link className="login-btn" to="/dashboardevents" >Cancel</Link>
                    </div>
                    {error ? (
                        <div className="notification is-danger is-light event-validation">You need to fill all the input</div>
                    ) : ''}
                    {success ? (
                        <div className="notification is-success is-light event-validation"> Advertise was Created successfuly</div>
                    ) : ''}
                </div>
            </div>

        </Container >
    )
}
export default CreateEvent;
