import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Client_Job_Create.css'
import '../styles/HomeButton.css'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'


const Client_Job_Edit = () => {

    let history = useHistory()

    const {id} = useParams()

    const [jobPosts, setJobPosts] = useState({
        job_title: "",
        job_price: "",
        job_category: "",
        job_description: "",
        job_delivery_time: "",
        job_status: "New Project",
    })

    const {job_title, job_price, job_category, job_description, job_delivery_time, job_status} = jobPosts

    const onChange = (e) =>{
        setJobPosts({
            ...jobPosts, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {

        await axios.put(`http://localhost:4000/job_posts/${id}`, jobPosts)
        history.push("/client_homepage")
        e.preventDefault()        
    }

    const loadJobPosts = async () => {
        const result = await axios.get(`http://localhost:4000/job_posts/${id}`)
        setJobPosts(result.data)
        
    }

    useEffect(() => {
        loadJobPosts()
    }, [])

    const showAddButton = job_title.length > 0 &&
                            job_price.length > 0 &&
                            job_category.length > 0 &&
                            job_description.length > 0 &&
                            job_delivery_time.length > 0

    return <div >

        <div className="home-btn">
            <Link className="btn btn-secondary" to="/client_homepage" >Homepage</Link>
        </div>
            
        
        <div className="create-job-form">

        <form >

            <div className="form-group">
                <label>Job Title</label>
                <input type="text" className="form-control" name="job_title" value={job_title} onChange={ e => onChange(e)} />
            </div>

            <div className="form-group">
                <label>Job Price</label>
                <input type="text" className="form-control" name="job_price" value={job_price} onChange={ e => onChange(e)}/>
            </div>

            <div className="form-group">
                <label>Job Category</label>
                
                <select className="form-control" name="job_category" value={job_category} onChange={ e => onChange(e)}>
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
                <label>Job Description</label>
                <textarea className="form-control" name="job_description" rows="3" value={job_description} onChange={ e => onChange(e)} ></textarea>
            </div>

            <div className="form-group">
                <label>Job Delivery Time</label>
                <input type="text" className="form-control" name="job_delivery_time" value={job_delivery_time} onChange={ e => onChange(e)} />
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

export default Client_Job_Edit