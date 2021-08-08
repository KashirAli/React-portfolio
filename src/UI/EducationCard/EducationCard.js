import React from 'react'
import './EducationCard.css'
export default function EducationCard(props) {
    
    return (
        <div className="container">
            <div className="title_date_wrapper">
            <div className="title">
                <h3>{props.heading}</h3>
                <h5>{props.subHeading}</h5>
            </div>
            <div className="date"> From {props.duration}</div>
            </div>
            <div className="para">
                <p>{props.text}</p>
            </div>
            {props.isBtn && <div className="eduBtn"><a href="#">{props.btntext}<i className=""></i></a></div>}
        </div>
    )
}
