import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Client_Homepage.css'

const Client_Homepage = () => {
    return <div className="home">

        <div className="home-first">Hire The Most In Demand Professional</div>

        <div className="home-second">Take Your Projects From</div>

        <div className="home-third">Concept To Completion</div>
        
        <div className="home-hire">

            <Link className="btn btn-secondary" to="/client_job_create" >Hire Bidder</Link> {" "}

            <Link className="btn btn-secondary" to="/client_event_create" >Create Event</Link>
                 
        </div>

        <div className="home-others">
                 
            <Link className="btn btn-secondary" to="/client_job_view_All" >View Posted Jobs</Link> {" "}        
                 
            <Link className="btn btn-secondary" to="/client_job_view_completed" >View Completed Jobs</Link> {" "}        
                 
            <Link className="btn btn-secondary" to="/client_job_view_ongoing" >View Ongoing Jobs</Link> {" "}

        </div>

        <div className="home-others">
                 
            <Link className="btn btn-secondary" to="/client_event_view_All" >View Upcoming Events</Link> {" "}        
                 
            <Link className="btn btn-secondary" to="/client_event_view_completed" >View Finished Events</Link> {" "}        
                 
            <Link className="btn btn-secondary" to="/client_event_view_ongoing" >View Ongoing Events</Link> {" "}

        </div>

            
            

    </div>
}

export default Client_Homepage