import { transform } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import {Button} from '@material-ui/core'
import './InputFile.css'
const InputFile = (props)=>{
    const [error,setError] = useState('');
    const allowType = ['image/png','image/jpeg'];

    useEffect(()=>{},[props.file])

    const onChangeHandler = (e)=>{
        const selected = e.target.files[0];
        if(selected && allowType.includes(selected.type)){
            props.setFile(selected)
            setError('');
        }
        else{
            props.setFile(null);
            setError('Please select an image file(png or jpeg)');
        }
    }
    return(
        <form style={{marginLeft:'15px'}}> 
        <label>
        <input type="file" onChange={onChangeHandler}/>
        <Button style={{marginLeft:'-15px'}} variant="contained" color="primary" component="span">
          Upload
        </Button>
        </label>
        {error &&  <div>
            <p className="error">{error}</p>
        </div> }
        </form>
    );
}
export default InputFile;
