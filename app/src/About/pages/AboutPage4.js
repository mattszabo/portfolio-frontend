import React from 'react';

const AboutPage4 = () => {
  return (
    <div className='subpage-about'>
      <h3>This porTfoLio</h3>
      <p>
        This responsive single page app demonstates much of what I have learned so far. It utilizes vw and vh style units in an attempt to have a consistent look and feel across all screen sizes. I've designed and written everything myself except for the stock photos, which are all under the Creative Commons CC0 license, and the carousel swipe functionality can be attributed to the react-swipeable-views package (the pagination was written by myself).
      </p>
      <h4>developmenT environmenT</h4>
      <p>
        The app is developed using webpack (configured with hot module replacement), git & github for source control, npm for package management and task running, and Chrome & React dev tools for debugging.
      </p>
      <h4>coding</h4>
      <p>
        The app uses React components written in JavaScript ES6 and JSX, which is all transpiled using babel. Sass is used for styling and you can see the use of SVG's for the arrows and dots used for the pagination of the carousel.
      </p>
      <h4>hosTing</h4>
      <p>
        The app is running on a Node.js express server, which resides on an AWS EC2 instance running Ubuntu 14.04.
      </p>
    </div>
  );
}

export default AboutPage4;
