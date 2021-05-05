import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
import '../styles/HomeButton.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Event_PDF from './Event_PDF'

const Client_Event_Details = () => {

    let history = useHistory()

    const [eventPosts, setEventPosts] = useState({
        event_title: "",
        event_price: "",
        event_category: "",
        event_description: "",
        event_start_date: "",
        event_stop_date: "",
        event_status: ""
    })

    const {id} = useParams()

    useEffect(() => {
        loadEventPosts()
    }, [])

    const loadEventPosts = async () => {
        const result = await axios.get(`http://localhost:4000/event_posts/${id}`)
        setEventPosts(result.data)
        
    }

    return <div>

        <div className="home-btn">
            <Link className="btn btn-secondary" to="/client_homepage" >Homepage</Link>
        </div>
            
        <Event_PDF 
            title = {eventPosts.event_title}
            prize = {eventPosts.event_prize}
            category = {eventPosts.event_category}
            description = {eventPosts.event_description}
            status = {eventPosts.event_status}
            start = {eventPosts.event_start_date}
            stop = {eventPosts.event_stop_date}
        />

        <div className="home-btn">
            <button className="btn btn-outline-secondary mr-10" onClick={() => history.goBack()}>Back</button>
        </div>
        
    </div>
}

export default Client_Event_Details