import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LeftContainer from './Components/LeftContainer/LeftContainer';
import RightContainer from './Components/RightContainer/RightContainer';
import { IconButton, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {ProgressBar} from 'react-bootstrap'
function App() {
  const [show,setShow] = useState(false);

  return (
    <div className="app">
      <div className="main-container">
        <div className="header">
          <div>
          <IconButton onClick={()=>setShow(!show)} color="primary" aria-label="upload picture" component="span">
         <MenuIcon/>
        </IconButton>
          </div>
        </div>
        <LeftContainer show={show}/>
        <RightContainer/>

      </div>
    </div>
  );
}

export default App;
