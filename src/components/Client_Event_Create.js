import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Client_Event_Create.css'
import '../styles/HomeButton.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'



const Client_Event_Create = () => {

    let history = useHistory()

    const [eventPosts, setEventPosts] = useState({
        event_title: "",
        event_prize: "",
        event_category: "",
        event_description: "",
        event_start_date: "",
        event_stop_date: "",
        event_status: "Upcoming Event"
    })

    const {event_title, event_prize, event_category, event_description, event_start_date, event_stop_date, event_status} = eventPosts

    const onChange = (e) =>{
        setEventPosts({
            ...eventPosts, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {

        await axios.post("http://localhost:4000/event_posts", eventPosts)
        history.push("/client_homepage")
        e.preventDefault()        
    }

    const showAddButton = event_title.length > 0 &&
                            event_prize.length > 0 &&
                            event_category.length > 0 &&
                            event_description.length > 0 &&
                            event_start_date.length > 0 &&
                            event_stop_date.length > 0

                            

    return <div >

        <div className="home-btn">
            <Link className="btn btn-secondary" to="/client_homepage" >Homepage</Link>
        </div>

        
        <div className="caution"><h3>Fill all the area to submit</h3></div>
        
        <div className="create-event-form">

            <form >

                <div className="form-group">
                    <label>Event Title</label>
                    <input type="text" className="form-control" name="event_title" value={event_title} onChange={ e => onChange(e)} />
                </div>

                <div className="form-group">
                    <label>Event Prize</label>
                    <input type="text" className="form-control" name="event_prize" value={event_prize} onChange={ e => onChange(e)}/>
                </div>

                <div className="form-group">
                    <label>Event Category</label>
                    <select className="form-control" name="event_category" value={event_category} onChange={ e => onChange(e)}>
                        <option></option>
                        <option>Design & Creative</option>
                        <option>Development & IT</option>
                        <option>Writing & Translation</option>
                        <option>Engineering & Architecture</option>
                        <option>Sales & Marketing</option>
                        <option>Finance & Accounting</option>
                        <option>Admin & Customer Support</option>
                        <option>Legal</option>                    
                    </select>
                </div>


                <div className="form-group">
                    <label>Event Description</label>
                    <textarea className="form-control" name="event_description" rows="3" value={event_description} onChange={ e => onChange(e)} ></textarea>
                </div>

                <div className="form-group">
                    <label>Event Start Date</label>
                    <input type="date" className="form-control" name="event_start_date" id="datePickerId" value={event_start_date} onChange={ e => onChange(e)} />
                </div>

                <div className="form-group">
                    <label>Event Stop Date</label>
                    <input type="date" className="form-control" name="event_stop_date" id="datePickerId" value={event_stop_date} onChange={ e => onChange(e)} />
                </div>

                <div className="submit">
                    { showAddButton && <Link type="submit" className="btn btn-success" onClick={e => onSubmit(e)} >Submit</Link>}
                </div>

            </form>

        </div>

    </div>

    
    
}



export default Client_Event_Create