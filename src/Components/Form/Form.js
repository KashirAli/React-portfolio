import  Input  from '../../UI/Input/Input'
import React,{useState} from 'react'
import {Button} from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Form.css'
import emailjs from 'emailjs-com';
function Forms() {
    const [name,setName] = useState('');
    const [message,setMessage]= useState('');
    const [email,setEmail] = useState('');
    const nameChangeHandler = (e)=>{
        setName(e.target.value)
    }
    const userChangeHandler = (e)=>{
        setEmail(e.target.value)
    }
    const messageChangeHandler = (e)=>{
        setMessage(e.target.value)
    }
    const submitFormHandler = (e)=>{

        e.preventDefault()

            emailjs.sendForm('service_ne5txp7', 'template_6doauf6',e.target, 'user_PS9Z3GS30lCZI6X6MWUxl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
       <div className="bg_grey"> 
           <form onSubmit={submitFormHandler}>
       <Input placeholder="Name" type="text" onChange={nameChangeHandler} name="name">
       <i class="fas fa-user-alt" style={{color:'#8C8C8E'}}></i>
       </Input>
       <Input placeholder="Email" type="email" onChange={userChangeHandler} name="email">
        @
       </Input>
       <Input placeholder="Message" type="textarea" onChange={messageChangeHandler} message="message">
       <i class="fas fa-envelope" style={{color:'#8C8C8E' ,height:'90px',margin:'auto 0'}}></i>
       </Input>
       <Button type="submit" className="btn" variant="warning">
           Send Message
       </Button>
           
           </form>
       </div>
    )
}

export default Forms;
