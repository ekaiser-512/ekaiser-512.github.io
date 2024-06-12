import React from 'react';
import IMG_1341 from '../../../assets/IMG_1341.jpg';
import EmilyKaiserResume2024 from '../../../../public/EmilyKaiserResume2024.pdf'
import './About.css'; // Import the new CSS file

const About = () => {

  const handleButtonClick = () => {
    window.open('/EmilyKaiserResume2024.pdf', '_blank');
  };

  return (
    <section className="about" id="about">
    <h2>About Me</h2>
    <div className="about-content">
      <div className="about-text">
        <p>
          Emily is a software developer with expertise in Java, 
          Javascript, Spring, React, HTML/CSS and various back-end technologies. 
          She loves to build out programs that wow the user.
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
      </div>
      <div className="about-image">
        <img src={IMG_1341} alt="About Image" />
      </div>
      <div className="about-button">
        <button onClick={handleButtonClick}>View My Resume</button>
      </div>
    </div>
  </section>
  )
}

export default About;