import React, {useState} from 'react';
import {HiHome} from 'react-icons/hi';
import {BsFillChatTextFill} from 'react-icons/bs';
import {MdAccountCircle} from 'react-icons/md';
import {FaList} from 'react-icons/fa';
import {AiFillInfoCircle} from 'react-icons/ai';
import './navbar.css';

function Navbar() {

    const [activeNav,
        setActiveNav] = useState('home');

    const onClickedNavHandler = (navItem) => {
        setActiveNav(navItem);
    }
    return (
        <nav>
            <a
                href='#'
                onClick={() => onClickedNavHandler('home')}
                className={activeNav === 'home'
                ? 'activeMenu'
                : ''}><HiHome/></a>

            <a
                href='#about'
                onClick={() => onClickedNavHandler('about')}
                className={activeNav === 'about'
                ? 'activeMenu'
                : ''}><AiFillInfoCircle/></a>
            <a
                href='#experiences'
                onClick={() => onClickedNavHandler('experiences')}
                className={activeNav === 'experiences'
                ? 'activeMenu'
                : ''}><MdAccountCircle/></a>
            <a
                href='#skills'
                onClick={() => onClickedNavHandler('skills')}
                className={activeNav === 'skills'
                ? 'activeMenu'
                : ''}><FaList/></a>
            <a
                href='#contact'
                onClick={() => onClickedNavHandler('contact')}
                className={activeNav === 'contact'
                ? 'activeMenu'
                : ''}><BsFillChatTextFill/></a>
        </nav>
    )
}

export default Navbar