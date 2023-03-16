import React from 'react';
import './aboutBox.css';

function AboutBox(props) {
  return (
    <div>
        <div className='aboutMeBox'>
          <div className='aboutBoxIcon'>
                        {props.icon}
                        </div>
                        <h3>{props.title}</h3>
                        <br/>
                        <br/>
                        <p>{props.subTitle}</p>
                    </div>
    </div>
  )
}

export default AboutBox