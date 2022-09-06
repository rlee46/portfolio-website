import React from 'react';
import '../css/Profile.css';

export default function Profile() {
  return (
    <>
        <div className='container'>
        <h1 className='sec-title'><span className='title-span'>&#x1F4F0;Profile</span></h1>
        <div className='paragraph'>
            <p className='text'>
                Hello, I’m Ryan! I’m currently a first-year student in the Computer Systems Technology program at the British Columbia Institute of Technology. 
                I’m always looking for new opportunities to learn in a variety of fields. 
            </p>
            <p className='text'>
                During my time at BCIT, projects have emphasized the agile development workflow, where I’ve worked on frontend and 
                backend feature development. Our teams used a variety of different technologies and languages and frameworks to build our applications, 
                including HTML5, CSS3, JavaScript, and NodeJS, and React (which I used to build this page).
            </p>
            </div>
        </div>
    </>
  )
}
