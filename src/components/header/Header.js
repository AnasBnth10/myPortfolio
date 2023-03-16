import React from 'react';
import Socials from '../socials/Socials';
import CV from '../../assets/AnasBentaher-cv.pdf';
import ProfileImage from './ProfileImage';
import MB300Image from '../../assets/MB300-logo.png';
import MB500Image from '../../assets/MB500-logo.png';
import CertificationImage from './CertificationImage';
import './header.css';

function Header() {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Anas Bentaher</h1>
                <h5 className='text-light'>Fullstack Developper</h5>

                <div className='headerRow'>
                    
                    <CertificationImage image={MB300Image}/>

                    <div>
                        <ProfileImage/>
                        <div className='header_buttons'>
                            <a href={CV} download className='btn'>
                                Download CV</a>
                            <a href='#contact' className='btn'>
                                Lets talk</a>
                        </div>
                    </div>
                    <CertificationImage image={MB500Image}/>
                </div>
            </div>
            <br/>
            <br/>
            <Socials/>
        </header>
    )
}

export default Header