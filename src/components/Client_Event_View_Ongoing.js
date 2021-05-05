import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Client_Event_Create.css'
import '../styles/SearchBar.css'
import '../styles/Pagination.css'
import '../styles/HomeButton.css'
import ReactPaginate from 'react-paginate'

const Client_Event_View_Ongoing = () => {

    const [eventPosts, setEventPosts] = useState([])

    const [pageNumber, setPageNumber] = useState(0)

    const postsPerPage = 7

    const pagesVisited = pageNumber * postsPerPage

    useEffect(() => {
        loadEventPosts()
    }, [])

    const loadEventPosts = async () => {
        const results = await axios.get("http://localhost:4000/event_posts")
        setEventPosts(results.data)
    }

    const loadEventPostsReverse = async () => {
        const results = await axios.get("http://localhost:4000/event_posts")
        setEventPosts(results.data.reverse())
    }

    const deleteEventPost = async id => {
        await axios.delete(`http://localhost:4000/event_posts/${id}`)
        loadEventPosts()
    }

    const [searchValue, setSearchValue] = useState("")

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }


    const pageCount = Math.ceil(eventPosts.length / postsPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }


    return <div>

        <div className="home-btn">
            <Link className="btn btn-secondary" to="/client_homepage" >Homepage</Link>
            <button className="btn btn-secondary" onClick={loadEventPostsReverse}>View Newest to Oldest</button>
            <button className="btn btn-secondary" onClick={loadEventPosts}>View Oldest to Newest</button>
        </div>

        <div className="searchBar">
            <input type="text" value={searchValue} onChange={handleSearchChange} placeholder="Search..." />
        </div>






        <table className="table table-hover border shadow">

            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Event Title</th>
                <th scope="col">Event Prize</th>
                <th scope="col">Event Category</th>
                <th scope="col">Event Description</th>
                <th scope="col">Event Start Date</th>
                <th scope="col">Event Stop Date</th>
                <th scope="col">Action</th>
                </tr>
            </thead>


            <tbody>

                {
                    eventPosts.filter((event_post) => {

                        if (searchValue == ""){
                            return event_post.event_status == "Ongoing Event"
                        }
            
                        else if (
                            event_post.event_title.toLowerCase().includes(searchValue.toLowerCase()
                            )){
                                return event_post.event_status == "Ongoing Event"
                        }
                        else if (
                            event_post.event_prize.toLowerCase().includes(searchValue.toLowerCase()
                            )){
                                return event_post.event_status == "Ongoing Event"
                        }
                        else if (
                            event_post.event_category.toLowerCase().includes(searchValue.toLowerCase()
                            )){
                                return event_post.event_status == "Ongoing Event"
                        }
                        else if (
                            event_post.event_description.toLowerCase().includes(searchValue.toLowerCase()
                            )){
                                return event_post.event_status == "Ongoing Event"
                        }
                        else if (
                            event_post.event_start_date.toLowerCase().includes(searchValue.toLowerCase()
                            )){
                                return event_post.event_status == "Ongoing Event"
                        }
                        else if (
                            event_post.event_stop_date.toLowerCase().includes(searchValue.toLowerCase()
                            )){
                                return event_post.event_status == "Ongoing Event"
                        }
            
                    }).slice(pagesVisited, pagesVisited+postsPerPage).map((event_post, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{event_post.event_title}</td>
                            <td>{event_post.event_prize}</td>
                            <td>{event_post.event_category}</td>
                            <td>{event_post.event_description}</td>
                            <td>{event_post.event_start_date}</td>
                            <td>{event_post.event_stop_date}</td>
                            <td>
                                <Link className="btn btn-secondary" to={`/client_event_details/${event_post.id}`} >Details</Link> {" "}
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

export default Client_Event_View_Ongoing