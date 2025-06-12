import React from 'react';
import profileImg from '../../res/portrait.jpg';
import './Showcase.css'
import './global.css'

const Showcase = () => {
  return (
    <section className="w-1600 showcase" id="showcase">
      <div className="showcase-text">
        <h1>Greetings!</h1>
        <h3>My name is <span className=''>Ilmar Vodi</span> and welcome to my e-portfolio.</h3>
        <p>
          I am a student at Tartu Vocational College, studying web development,
          software engineering, and design. I have a passion for coding and creating
          things. Feel free to scroll down to explore my work.
        </p>
      </div>
      <div className="showcase-image">
        <img src={profileImg} alt="Ilmar Vodi" />
      </div>
    </section>
  );
};

export default Showcase;