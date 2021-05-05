import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Client_Event_Create.css'
import '../styles/HomeButton.css'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'


const Client_Event_Edit = () => {

    let history = useHistory()

    const {id} = useParams()

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

        await axios.put(`http://localhost:4000/event_posts/${id}`, eventPosts)
        history.push("/client_homepage")
        e.preventDefault()        
    }

    const loadEventPosts = async () => {
        const result = await axios.get(`http://localhost:4000/event_posts/${id}`)
        setEventPosts(result.data)
        
    }

    useEffect(() => {
        loadEventPosts()
    }, [])

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
                <input type="text" className="form-control" name="event_start_date" value={event_start_date} onChange={ e => onChange(e)} />
            </div>

            <div className="form-group">
                <label>Event Stop Date</label>
                <input type="text" className="form-control" name="event_stop_date" value={event_stop_date} onChange={ e => onChange(e)} />
            </div>



            <div>
                {showAddButton && <Link type="submit" className="btn btn-success" onClick={e => onSubmit(e)} >Update</Link>}
            </div>

        </form>


        </div>

        <div className="home-btn">
            <button className="btn btn-outline-secondary mr-10" onClick={() => history.goBack()}>Back</button>
        </div>


    </div>
    
    
}

export default Client_Event_Edit