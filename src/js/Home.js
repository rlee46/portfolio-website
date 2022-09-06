import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import Education from './Education';
import Projects from './Projects';
import Profile from './Profile';
import Footer from './Footer';

export default function Home() {
  return (
    <>
    <div className='home-container'>
    <div className='header'><Header/></div>
        <Fade top className='education'>
          <Education/>
        </Fade>
        <Fade top className='projects'>
          <Projects/>
        </Fade>
        <Fade top className='profile'>
          <Profile/>
        </Fade>
        <Fade top className='footer'>
          <Footer/>
        </Fade>
      </div>
    </>
  )
}

