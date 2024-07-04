import React from 'react';
import aboutContent from './aboutContent';
import './depo.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-introduction">{aboutContent.introduction}</p>

      <h2 className="section-title">Affiliation/Accreditations</h2>
      <ul className="about-list">
        {aboutContent.affiliationAccreditations.map((item, index) => (
          <li key={index} className="about-list-item">{item}</li>
        ))}
      </ul>

      <h2 className="section-title">Courses Offered</h2>
      <p className="about-text">{aboutContent.coursesOffered.undergraduate}</p>
      <p className="about-text">{aboutContent.coursesOffered.postgraduate}</p>

      <h2 className="section-title">Highlights</h2>
      <ul className="about-list">
        {aboutContent.highlights.map((highlight, index) => (
          <li key={index} className="about-list-item">{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;