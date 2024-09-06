import React from "react";
import { FaAward } from "react-icons/fa";
import me from "../../assets/me.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
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
              <small>4+ years</small>
            </article>
          </div>
          <p>
            Overall 4.6 years of experience, including 3.6 years specializing in
            DevOps, AWS Cloud Platform and 1 year as a ReactJs Developer.
            Proficient in AWS, Azure, CI/CD pipelines, Docker, Jenkins,
            Terraform, Kubernetes, Shell Scripting and possesses sound knowledge
            in Ansible.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
