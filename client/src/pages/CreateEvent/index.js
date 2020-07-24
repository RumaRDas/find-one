import React, { useState, useMemo } from 'react';
import Container from '../../components/Container';
import cameraIcon from '../../assets/image/camera.png'
import API from '../../services/API'
import './style.css';

const CreateEvent = () => {
 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState("");
    const [date, setDate] = useState("");
    const [categories, setCategories] = useState("")
    const [thumbnail, setThumbnail] = useState("");

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    const submitHandler = async (evt) => {
        evt.preventDefault();
        const user_id = localStorage.getItem('user');
        console.log(title,description, cost, categories,date)
    }

    return (
        <div>
            <Container>
                <h1 className="eveHeader"> Create Your Event</h1>
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
                    <div className="control">
                        <input className="input" id="Color" type="text" placeholder={'Categories Name'} value={categories} onChange={evt => setCategories(evt.target.value)} />
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
                        <input className="input is-success" type="Number" placeholder={' $0.00'} value={cost} id="price" onChange={evt => setCost(evt.target.value)} />
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
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={submitHandler}>Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light" type="submit">Cancel</button>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default CreateEvent
