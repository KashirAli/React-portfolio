import React from 'react'
import {color} from '../color'
import './IconText.css'
function IconText(props) {
    return (
        <div className="iconTextContainer">
                    <i style={{color:color.bgWarning}} class="fas fa-check"></i>
                    <p style={{color:color.textSecondary}}>{props.text}</p>
                    </div>
    )
}

export default IconText
