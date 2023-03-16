import React from 'react';

function CertificationImage(props) {
  return (
    <div className='certificationImage'>
        <img src={props.image} alt='' className='certificationImage'></img>
    </div>
  )
}

export default CertificationImage;