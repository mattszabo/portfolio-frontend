import React from 'react';

const AboutPage1 = () => {
  return (
    <div className='aboutPage1'>
      <img className='img-portrait' src={require('../images/hire-me.jpg')} />
      <p>Matt Szabo: <em>Frontend developer</em></p>
      <div className='flash'>
        <p>( Swipe or click the dots below to learn more. )</p>
      </div>
    </div>
  );
}

export default AboutPage1;
