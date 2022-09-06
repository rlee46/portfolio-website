import React from 'react';
import '../css/Header.css';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDatabase} from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3, faReact, faJsSquare, faNodeJs, faStripe, faJava } from "@fortawesome/free-brands-svg-icons";
import bitmoji from '../img/bitmoji.png';

export default function Header() {
  return (
    <>
      <div className='header-body'>
        <h1 className='name'>RYAN LEE</h1>
        <p className='developer'>Developer</p>
        <img src={bitmoji} alt='bitmoji' className='bitmoji'/>
        <div class="wrapper">
          <div class="words">
            <span className="word-bank"> </span>
            <span className="word-bank">Frontend</span>
            <span className="word-bank back ">Backend</span>
          </div>
        </div>
        <div className='logos'>
          <table className='row-1'>
            <tr>
              <td className='first-icon'>
              <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
              </td>
              <td>
              <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
              </td>
              <td>
              <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
              </td>
              <td>
              <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon>
              </td>
              <td>
              <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
              </td>
              <td>
              <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
              </td>
              <td>
              <FontAwesomeIcon icon={faStripe}></FontAwesomeIcon>
              </td>
              <td>
              <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
              </td>
            </tr>
          </table>
        </div>
        <div className='logos-mobile'>
          <table className='row-2'>
            <tr>
              <td className='first-icon'>
              <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
              </td>
              <td>
              <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
              </td>
              <td>
              <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
              </td>
              <td>
              <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon>
              </td>
            </tr>
            <tr>
            <td>
              <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
              </td>
              <td>
              <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
              </td>
              <td>
              <FontAwesomeIcon icon={faStripe}></FontAwesomeIcon>
              </td>
              <td>
              <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}
