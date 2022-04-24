import React from 'react';
import { FaAward } from 'react-icons/fa';
import me from '../../assets/me.jpg';
import './about.css';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="logo" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward />
              <h5>Experience</h5>
              <small>2 years</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Provident odit perferendis reiciendis quod quis reprehenderit nisi doloribus quos debitis porro 
            nostrum voluptatibus velit dolorum atque ut maiores exercitationem, mollitia ipsam.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section >
  )
}

export default About