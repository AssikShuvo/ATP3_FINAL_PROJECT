import React from 'react'
import Pdf from 'react-to-pdf'
import '../styles/PDF.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/HomeButton.css'

const ref = React.createRef()

const Event_PDF = (Props) => {
    return <div>

        <div ref={ref} className="pdf">
            <h3>Job Title: {Props.title}</h3>
            <h3>Job Price: {Props.price}</h3>
            <h3>Job Category: {Props.category}</h3>
            <h3>Job Description: {Props.description}</h3>
            <h3>Job Status: {Props.status}</h3>
            <h3>Job Delivery Time: {Props.delivery}</h3>
        </div>

        <div className="home-btn">
            <Pdf targetRef={ref} filename="download.pdf" >
                { ({toPdf}) => <button className="btn btn-outline-secondary" onClick={toPdf}>Get PDF</button>}
            </Pdf>
        </div>        

    </div>

}   

export default Event_PDF