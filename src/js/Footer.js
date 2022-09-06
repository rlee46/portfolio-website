import React from 'react';
import '../css/Footer.css';
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
        <div className='footer-container'>
        <table className='footer-table'>
            <tr>
                <td className='text'>
                    <ExternalLink href="https://www.linkedin.com/in/ryan-alex-lee" className='LinkedIn'>
                        <span className='footer-text'>LinkedIn</span>
                        <FontAwesomeIcon icon={faLinkedin} className='footer-icon'></FontAwesomeIcon>
                    </ExternalLink>
                </td>
                <td className='text'>
                    <a target="_top" href="mailto:ryanalexlee1211@gmail.com">
                        <span className='footer-text'>ryanalexlee1211@gmail.com</span>
                        <FontAwesomeIcon icon={faEnvelope} className='footer-icon'></FontAwesomeIcon>
                    </a>
                </td>
                <td className='text'>
                    <a href="tel:778-881-7926">
                        <span className='footer-text'>(778) - 881 - 7926</span>
                        <FontAwesomeIcon icon={faPhone} className='footer-icon'></FontAwesomeIcon>
                    </a>
                </td>
            </tr>
            <tr>
                <td className='text'>
                    <ExternalLink href="https://github.com/rlee46" className='GitHub'>
                        <span className='footer-text'>GitHub</span>
                        <FontAwesomeIcon icon={faGithub} className='footer-icon'></FontAwesomeIcon>
                    </ExternalLink>
                </td>
                <td className='text'>
                <a target="_top" href="mailto:rlee345@my.bcit.ca">
                    <span className='footer-text'>rlee345@my.bcit.ca</span>
                    <FontAwesomeIcon icon={faEnvelope} className='footer-icon'></FontAwesomeIcon>
                </a>
                </td>
                <td className='text'>
                </td>
            </tr>
        </table>
        </div>
    </>
    )
}
