import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';

function CircularProgress(props) {
    return (
        <div style={{width:'50px'}}>
                  <CircularProgressbar
  value={props.value}
  text={`${props.value}%`}
  strokeWidth={10}
  styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `rgb(255,193,7)`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Customize transition animation
      transition: 'stroke-dashoffset 0.5s ease 0s',
      // Rotate the path
      transform: 'rotate(0)',
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#191923',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Rotate the trail
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#717171',
      // Text size
      fontSize: '26px',
      transform:'translate(-20px,5px)'
     
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#fff',
    },
  }}
/>;
                  </div>
    )
}

export default CircularProgress;
