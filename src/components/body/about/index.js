import React from 'react';
import SocialContact from '../../common/social-contact';
import './about.css';

function About() {
  return (<div className='about'>
       <div className="about-top">
         <div className="about-info">
        Hello there, <br/>I am <span className='info-name'>Malomo Okikioluwa</span> a Front-end developer based in Lagos, Nigeria with a demonstrated history of working in the computer software industry. Skilled in Front-end Development, Responsive Web Design, and Software development. I have the passion for building nice and scalable web products that can give users premium satisfaction.
         </div>
         <div className='about-photo'>
             <img src={require('../../../assets/coding.png')} className='picture' alt='pix' />
         </div>
       </div>
       <div className="about-bottom">
          <SocialContact />
       </div>
  </div>
  );
}

export default About;
