import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className='footerTitle'>
        <h2>Anas Bentaher - Portfolio</h2>
      </div>
      <br/>
      <br/>
      <div className='linkToSections'>
        <a href='#about'>About</a>
        <a href='#experiences'>Experiences</a>
        <a href='#skills'>Skills</a>
        <a href='#contact'>Contact</a>
      </div>
      <br/>
      <div className='copyrightSection'>
      <p>&copy; Anas - 2023</p>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </footer>
  )
}

export default Footer