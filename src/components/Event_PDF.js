import React from 'react'
import Pdf from 'react-to-pdf'
import '../styles/PDF.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/HomeButton.css'

const ref = React.createRef()

const Event_PDF = (Props) => {
    return <div>
        
        <div ref={ref} className="pdf">
            <h3>Event Title: {Props.title}</h3>
            <h3>Event Prize: {Props.prize}</h3>
            <h3>Event Category: {Props.category}</h3>
            <h3>Event Description: {Props.description}</h3>
            <h3>Event Status: {Props.status}</h3>
            <h3>Event Start Date: {Props.start}</h3>
            <h3>Event Start Date: {Props.stop}</h3>
        </div>

        <div className="home-btn">
            <Pdf targetRef={ref} filename="download.pdf" >
                { ({toPdf}) => <button className="btn btn-outline-secondary" onClick={toPdf}>Get PDF</button>}
            </Pdf>
        </div>
        

    </div>

}   

export default Event_PDF