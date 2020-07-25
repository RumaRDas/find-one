import React, { useState, useMemo } from 'react';
import Container from '../../components/Container';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import cameraIcon from '../../assets/image/camera.png'
import { Dropdown } from 'react-bulma-components';
import API from '../../services/API';
import './style.css';

const CreateEvent = ({history}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState("");
    const [date, setDate] = useState("");
    const [categories, setCategories] = useState("")
    const [thumbnail, setThumbnail] = useState(null);
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false);
    const [success, SetSuccess] = useState(false);

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    const submitHandler = async (evt) => {
        evt.preventDefault();
        const user_id = localStorage.getItem('user');
        // console.log(title,description, cost, categories,date)
        const eventData = new FormData();
        eventData.append('thumbnail', thumbnail)
        eventData.append('categories', categories)
        eventData.append('title', title)
        eventData.append('cost', cost)
        eventData.append('description', description)
        eventData.append('date', date)
        try {
            if (
            title !== '' &&
            categories !== '' &&
            cost !== "" &&
            date !== "" &&
            thumbnail !== null &&
            description !== ''
        ) {
            console.log("Event has been sent")
                await API.post("./api/event", eventData, { headers: { user_id } })
                SetSuccess(true)
                setTimeout(() => {
                    SetSuccess(false)
                    history.push("/eventpage")
                }, 2000)
                // console.log(eventData);
                // console.log("Event has been saved")
            } else {
                setErrorMessage(true)
                setTimeout(() => {
                    setErrorMessage(false)
                }, 2000)
              //  console.log("Missing required Data")
            }
        } catch (error) {
            Promise.reject(error);
            console.log(error.message);
            }
       
    }
    const CatagoryEventHandler = (categories) => {
        setCategories(categories)
    }
    console.log(categories)

    
    return (

        <Container>
            <div>
                <h1 className="eveHeader"> Create Your Event</h1>
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
                        <label className="label">Color</label>
                        <div className="control columns is-gapless">
                            <div className="column is-four-fifths">
                                <input className="input" id="Categories" type="text" placeholder={'Categories Name'} value={categories} onChange={evt => setCategories(evt.target.value)} />
                            </div>
                            <div className="column">
                                <Dropdown trigger="Choose">
                                    <a className="navbar-item" onClick={() => CatagoryEventHandler('red')}>  Red</a>
                                    <a className="navbar-item" onClick={() => CatagoryEventHandler('blue')}>  Blue</a>
                                    <a className="navbar-item" onClick={() => CatagoryEventHandler('black')}> Black </a>
                                </Dropdown>
                            </div>

                        </div>
                </div>
                <div className="field">
                    <label className="label">Event Name</label>
                    <div className="control">
                        <input className="input" id="title" type="text" placeholder={'Event Title'} value={title} onChange={evt => setTitle(evt.target.value)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Cost</label>
                    <div className="control">
                        <input className="input is-success" type="Number" placeholder={' Event price $0.00'} value={cost} id="cost" onChange={evt => setCost(evt.target.value)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Date</label>
                    <div className="control">
                        <input className="input is-success" type="date" placeholder={' Event Date'} value={date} id="date" onChange={evt => setDate(evt.target.value)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea className="textarea" placeholder={'Event description'} value={description} id="description" onChange={evt => setDescription(evt.target.value)}></textarea>
                    </div>
                </div>
                <div className="control">
                    <button className="submit-btn" onClick={submitHandler}>Create Event</button>
                </div>
                <div className="control">
                    <button className="login-btn" onClick={() => history.push('/enentpages')}>Cancel</button>
        
                </div>

                {error ? (
                    <div className="notification is-danger is-light event-validation"> Missing require information</div>
                ) : ''}
                {success ? (
                    <div className="notification is-success is-light event-validation"> Event was Created successfuly</div>
                ) : ''}
            </div>
            </div>

        </Container >
    )
}
export default CreateEvent;
