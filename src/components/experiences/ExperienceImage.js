import React from 'react';
import './experiences.css';

function ExperienceImage(props) {
  return (
    <div>
         <div>
        <img src={props.path} alt='test' className='experienceImage'/>
    </div>
    </div>
  )
}

export default ExperienceImage