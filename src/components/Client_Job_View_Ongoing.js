import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Client_Job_Create.css'
import '../styles/SearchBar.css'
import '../styles/Pagination.css'
import '../styles/HomeButton.css'
import ReactPaginate from 'react-paginate'

const Client_Job_View_Ongoing = () => {

    const [jobPosts, setJobPosts] = useState([])

    const [pageNumber, setPageNumber] = useState(0)

    const postsPerPage = 7

    const pagesVisited = pageNumber * postsPerPage

    useEffect(() => {
        loadJobPosts()
    }, [])

    const loadJobPosts = async () => {
        const results = await axios.get("http://localhost:4000/job_posts")
        setJobPosts(results.data)
    }

    const loadJobPostsReverse = async () => {
        const results = await axios.get("http://localhost:4000/job_posts")
        setJobPosts(results.data.reverse())
    }

    

    const [searchValue, setSearchValue] = useState("")

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }


    const pageCount = Math.ceil(jobPosts.length / postsPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }


    return <div>
        
        <div className="home-btn">
            <Link className="btn btn-secondary" to="/client_homepage" >Homepage</Link>
            <button className="btn btn-secondary" onClick={loadJobPostsReverse}>View Newest to Oldest</button>
            <button className="btn btn-secondary" onClick={loadJobPosts}>View Oldest to Newest</button>
        </div>

        <div className="searchBar">
            <input type="text" value={searchValue} onChange={handleSearchChange} placeholder="Search..." />
        </div>






        <table className="table table-hover border shadow">

            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Job Title</th>
                <th scope="col">Job Price</th>
                <th scope="col">Job Category</th>
                <th scope="col">Job Description</th>
                <th scope="col">Delivery Time</th>
                <th scope="col">Action</th>
                </tr>
            </thead>


            <tbody>

                {
                    jobPosts.filter((job_post) => {

                        if (searchValue == ""){
                            return job_post.job_status == "Ongoing Project"
                        }
            
                        else if (
                            job_post.job_title.toLowerCase().includes(searchValue.toLowerCase()
                            )){
                                return job_post.job_status == "Ongoing Project"
                        }
                        else if (
                            job_post.job_price.toLowerCase().includes(searchValue.toLowerCase()
                            )){
                                return job_post.job_status == "Ongoing Project"
                        }
                        else if (
                            job_post.job_category.toLowerCase().includes(searchValue.toLowerCase()
                            )){
                                return job_post.job_status == "Ongoing Project"
                        }
                        else if (
                            job_post.job_description.toLowerCase().includes(searchValue.toLowerCase()
                            )){
                                return job_post.job_status == "Ongoing Project"
                        }
                        else if (
                            job_post.job_delivery_time.toLowerCase().includes(searchValue.toLowerCase()
                            )){
                                return job_post.job_status == "Ongoing Project"
                        }
            
                    }).slice(pagesVisited, pagesVisited+postsPerPage).map((job_post, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{job_post.job_title}</td>
                            <td>{job_post.job_price}</td>
                            <td>{job_post.job_category}</td>
                            <td>{job_post.job_description}</td>
                            <td>{job_post.job_delivery_time}</td>
                            <td>
                                <Link className="btn btn-secondary" to={`/client_job_details/${job_post.id}`} >Details</Link> {" "}
                            </td>
                        </tr>
                    ))
                    
                    
                }
                

            </tbody>
            

                    

        </table>
        <ReactPaginate 
        previousLabel={"Previous"} 
        nextLabel={"Next"} 
        pageCount={pageCount} 
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        activeClassName={"paginationActive"}
        
        />
       
        
        
        
    </div>
    
}

export default Client_Job_View_Ongoing