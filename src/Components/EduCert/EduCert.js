import React from 'react'
import EducationCard from '../../UI/EducationCard/EducationCard'
import './EduCert.css'
function EduCert() {
    return (
        <div className="wrapper">
            <div className="wrapper_inner">
                <h2>Education</h2>
                <EducationCard heading="Intermediate" subHeading="Punjab College" text="I was done my Inter in computer science from Punjab College, Lahore by obtaining 1000 marks" duration="2017-2019"/>
                <EducationCard heading="BSCS" subHeading="PUCIT" text="I am doing my graduation (done 4th semester with 3.4cgpa) in computer science from Punjab University College of Infrmation Technology (PUCIT), Lahore." duration="2019-2023"/>
                {/* <EducationCard heading="" subHeading="" text="" duration=""/> */}
            </div>
            <div className="wrapper_inner">
            <h2>Work History</h2>

            <EducationCard heading="Web Developer" subHeading="KhadimOnline" text="Work as a frontend developer in KhadinOnline (Online service Provider)." duration="2020-21"/>
            <EducationCard heading="React Web Developer" subHeading="Freelancer" text="Work with a team of freelancers as a React JS developer" duration="2021"/>
            {/* <EducationCard heading="" subHeading="" text="" duration=""/> */}

            </div>
        </div>
    )
}

export default EduCert
