import React from 'react'
import {ProgressBar} from 'react-bootstrap'
import './LinearProgress.css'


function LinearProgress(props) {
    return (
              <div className="linearBar">
                 <p style={{color:'white'}}>{props.text}</p>
                  <ProgressBar style={{ height:'7.5px'}} variant="warning" now={props.now} />
                </div>
    )
}

export default LinearProgress;
