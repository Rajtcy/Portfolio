import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>~ SARVATH ~</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://linkedin.com/in/sarvath-s-1686421b6" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Sarvath30" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
    </footer>
  )
}

export default Footer
