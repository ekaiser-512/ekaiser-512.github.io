import React from 'react';
import IMG_1341 from '../../../assets/IMG_1341.jpg';
import EKResume2024 from '../../../../public/EKResume2024.pdf'
import './About.css'; // Import the new CSS file

const About = () => {

  const handleButtonClick = () => {
    window.open('public/EKResume2024.pdf', '_blank');
  };

  const handleKPIButtonClick = () => {
    window.open("https://docs.google.com/spreadsheets/d/1fvgL0CCkY__21m1U7q0VlTut1jPp8WgqJddH_SiHXvE/edit?usp=sharing", '_blank');
  }

  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Emily is a software developer with expertise in Java,
            Javascript, Spring, React, HTML/CSS and SQL.
            She loves to build out applications that wow the user.
          </p>
          <p>
            With additional education in advertising and graphic design as well
            as professional experience in enterprise sales, she's sure
            to create clean and scalable code with the end user in mind.
          </p>
          <p>
            Outside of her professional life, she enjoys time with her husband and daughter. She also
            happens to be a crochet expert and loves to bake. During the fall, you can catch
            her spending her Sundays cheering on the Kansas City Chiefs.
          </p>

          <p>
            If you want to learn more about Emily's capabilities and growth throughout the General Assembly course and beyond, you can reach out to her mentor, Ben Harris.
          </p>
        </div>
        <div className="about-image">
          <img src={IMG_1341} alt="About Image" />
        </div>
        <div className="about-button">
          <button onClick={handleButtonClick}>View My Resume</button>
        </div>
        <div className="about-button">
          <button onClick={handleKPIButtonClick}>General Assembly Stats</button>
        </div>
      </div>
    </section>
  )
}

export default About;