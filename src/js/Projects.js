import React from 'react';
import '../css/Projects.css';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from 'react-external-link';

export default function Projects() {
  return (
    <>
        <div className='container'>
        <h1 className='sec-title'><span className='title-span'>&#x2699; Projects</span></h1>
        <h2>Hope In A Box | Backend Lead 
            <ExternalLink href="https://youtu.be/EBvSKi303JI" className='youtube'>
                <FontAwesomeIcon icon={faYoutube} className='youtube'></FontAwesomeIcon>
            </ExternalLink>
        </h2>

        <p className='text'>An app that allows users to buy and send care packages around the world to people in countries
        with extreme political, social, or environmental circumstances.</p>
        <table className='tech'>
            <tbody>
            <tr>
                <td className='text'>
                    &#x2022; Established user-authenticated login using <span className='tech-label'>MySQL2 </span>
                    and encrypted passwords with <span className='tech-label'>Bcrypt </span>
                </td>
            </tr>
            <tr>
                <td className='text'>
                    &#x2022; Implemented fully functional checkout system using 
                    <span className='tech-label'> Stripe API</span>
                </td>
            </tr>
            <tr>
                <td className='text'>
                    &#x2022; Utilized <span className='tech-label'>NodeJS </span> for route handling
                </td>
            </tr>
            <tr>
                <td className='text'>
                    &#x2022; Deployed using <span className='tech-label'>Heroku</span> and <span className='tech-label'>ClearDB </span>
                </td>
            </tr>
            </tbody>
        </table>

        <span className='divider'>
           &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
        </span>
        <span className='mobile-divider'>
        &#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;
        </span>
        <h2>MindfulBits | Backend Lead</h2>
        <p className='text'>
            A web application to help users improve their mental health through helpful reminders throughout the day and
            activity suggestions
        </p>
        <table className='tech'>
            <tbody>
            <tr>
                <td className='text'>
                    &#x2022; Utilized <span className='tech-label'>Firebase </span> for deployment
                </td>
            </tr>
            <tr>
                <td className='text'>
                    &#x2022; Built with <span className='tech-label'>JavaScript </span>, <span className='tech-label'> CSS3</span>
                    , and <span className='tech-label'>HTML5</span>
                    
                </td>
            </tr>
            <tr>
                <td className='text'>
                    &#x2022; Cultivated using an <span className='tech-label'>Agile </span> workflow
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </>
  )
}
