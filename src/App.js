import React from 'react';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Experiences from './components/experiences/Experiences';
import About from './components/about/About';
import Nav from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className='App'>
    <Header/>
    <Nav/>
    <About/>
    <Experiences/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App;