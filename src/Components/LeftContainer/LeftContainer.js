import React from 'react'
import piclogo from '../../assets/piclogo.png';
import CircularProgress from '../../UI/circularProgress';
import LinearProgress from '../../UI/LinearProgress';
import IconText from '../../UI/IconText/IconText';
import { IconButton, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
function LeftContainer({show,setShow}) {
    return (
            <div className={show?"left-container show":"left-container"}>
             
          <div className="left-top">
            <div className="left-top-container">
              <div className="image"><img src={piclogo} width="85px" height="85px"/>
              <div className="circle"></div>
              <div className="circle-static"></div>
              </div>
              <div className="text"><h1>Kashir Ali</h1></div>
              <div className="text-sec"><p>React JS |Web Developer</p></div>
            </div>
          </div>
          <div className="left-mid">
            <div style={{width:'80%',margin:'0 auto'}} className="left-mid-container">
              <div className="address">
                <div className="address-row">
                  <h2>Residence:</h2><p>Pakistan</p>
                </div>
                <div className="address-row">
                  <h2>City:</h2><p>Lahore</p>
                </div>
                <div className="address-row">
                  <h2>Age:</h2><p>20</p>
                </div>
              </div>
              <div className="language">
                <div className="language-row">
                <CircularProgress value="80"/>
                   <p>English</p> 
                </div>
                <div className="language-row">
                <CircularProgress value="99"/>
                <p>Urdu</p> 
                </div>
                <div className="language-row">
                <CircularProgress value="70"/>
                <p>Hindi</p> 
              </div>
              </div>
              <div className="stack">
            <LinearProgress text="html" now="90"/>
            <LinearProgress text="Css" now="80"/>
            <LinearProgress text="JavaScript" now="80"/>
            <LinearProgress text="Bootstrap" now="90"/>
            <LinearProgress text="React JS" now="90"/>
                
              </div>
              <div className="library">
                   <IconText text="React Bootstrap"/>
                   <IconText text="Material UI"/>
                   <IconText text="Redux"/>
                   <IconText text="Git Knowledge"/>
              </div>
              <div className="resume">
                <a style={{textDecoration:'none'}} target="_blank" href="https://drive.google.com/file/d/1Rx0gLh_Ts92M4Ai4WVUHib-VhvjIakfX/view?usp=sharing"><span>DOWNLOAD CV </span><i class="fa fa-download" aria-hidden="true"></i></a>

              </div>
            </div>
          </div>
          <div className="left-bottom">
            <div><i class="fab fa-twitter"></i></div>
            <div><i class="fab fa-github"></i></div>
            <div><i class="fab fa-linkedin-in"></i></div>
         
          </div>
        </div>
        
    )
}

export default LeftContainer
