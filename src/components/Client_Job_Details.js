import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
import '../styles/HomeButton.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Job_PDF from './Job_PDF'

const Client_Job_Details = () => {

    let history = useHistory()

    const [jobPosts, setJobPosts] = useState({
        job_title: "",
        job_price: "",
        job_category: "",
        job_description: "",
        job_delivery_time: "",
        job_status: "",
        postSubmitted: false
    })

    const {id} = useParams()

    useEffect(() => {
        loadJobPosts()
    }, [])

    const loadJobPosts = async () => {
        const result = await axios.get(`http://localhost:4000/job_posts/${id}`)
        setJobPosts(result.data)
        
    }

    return <div>

        
        <div className="home-btn">
            <Link className="btn btn-secondary" to="/client_homepage" >Homepage</Link>
        </div>
        
        <Job_PDF 
            title = {jobPosts.job_title}
            price = {jobPosts.job_price}
            category = {jobPosts.job_category}
            description = {jobPosts.job_description}
            status = {jobPosts.job_status}
            delivery = {jobPosts.job_delivery_time}
        />
       
        <div className="home-btn">
            <button className="btn btn-outline-secondary" onClick={() => history.goBack()}>Back</button>
        </div>
        
        
    </div>
}

export default Client_Job_Details