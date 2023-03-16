import React from 'react';
import {AiFillLinkedin,AiFillGithub,AiFillMail} from 'react-icons/ai';
import './socials.css';

function Socials() {
  return (
    <div className='socials'>
        <a href='https://www.linkedin.com/in/anas-bentaher-b5401619a/'  target={"_blank"}><AiFillLinkedin className='social_icons'/></a>
        <a href='https://github.com/' target={"_blank"}><AiFillGithub className='social_icons'/></a>
        <a href='mailto:anasbnth@gmail.com' target={"_blank"}><AiFillMail className='social_icons'/></a>
    </div>
  )
}

export default Socials