import React,{useState} from 'react'
import './Input.css'
function Input(props) {
    const textStyle ={ background:'#20202A' ,border:'none',height:'45px',color:'#8C8C8E'}
    const commentStyle = { background:'#20202A' ,border:'none',height:'90px',color:'#8C8C8E'}
    const [addClass,setAddClass] = useState(textStyle,commentStyle);
    const addCssClass = (type)=>{
       
            if(type==='text'){
               setAddClass({...textStyle,background:'yellow',color:'black'})
            }
            if(type==='comment'){
                setAddClass({...commentStyle,background:'yellow',color:'black'})
              
            }
    }
    const removeCssClass = (type)=>{
        if(type==='text'){
            setAddClass({...textStyle})
         }
         if(type==='comment'){
             setAddClass({...commentStyle})
           
         }
    }
    
    return (
        <div className="row">
            <div className="col-sm-12 mb-4">
      <div className="input-group" >
        <div className="input-group-prepend">
          <div className="input-group-text"  style={addClass}>{props.children}</div>
        </div>
        {
            props.type !== 'textarea' &&  <input name={props.name} onChange={props.onChange} type="text" className="form-control bgColor" id="inlineFormInputGroupUsername" placeholder={props.placeholder} onBlur={()=>removeCssClass('text')} onFocus={()=>addCssClass('text')}/>
      
        }
        {
            props.type === 'textarea' && <textarea name={props.message} onChange={props.onChange} style={{height:'90px'}} className="form-control bgColor" placeholder={props.placeholder} onBlur={()=>removeCssClass('comment')} onFocus={()=>addCssClass('comment')}/>
        }
       </div>
    </div>
        </div>
        
    )
}

export default Input;
