import React from 'react';

const AboutPage5 = () => {
  return (
    <div className='subpage-about'>
      <h3>hobbies</h3>
      <img className='img-skateboard' src={require('../images/k-grind-nollie-shuvit.jpg')} />
      <ul className='hobbies'>
        <li>
          Skateboarding
        </li>
        <li>Live music</li>
        <li>Coding</li>
        <li>Futsal</li>
        <li>Nature walks</li>
      </ul>
    </div>
  );
}

export default AboutPage5;
