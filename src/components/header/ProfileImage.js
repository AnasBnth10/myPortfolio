import React from 'react';
import profileImage from '../../assets/Profile.jfif';

function ProfileImage() {
  return (
    <div>
        <img src={profileImage} alt='' className='profileImage'></img>
    </div>
  )
}

export default ProfileImage