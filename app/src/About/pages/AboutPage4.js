import React from 'react';

const AboutPage4 = () => {
  return (
    <div className='subpage-about'>
      <h3>This porTfoLio</h3>
      <p>
        This site utilizes vw and vh style units in an attempt to give a consistent look and feel to all screen sizes. The dimensions of each section is one screen height and one screen width regardless of the device you're viewing on. The navigation bar links are intended to slide each section into propper view. There is also a breakpoint set for a large mobile device. Screen resolutions above and below will display some things differently, most notably seen with the contact page.
      </p>
      <h4>developmenT environmenT</h4>
      <p>
        The app is developed using webpack (configured with hot module replacement), git & github for source control, npm for package management and task running, and Chrome & React dev tools for debugging.
      </p>
      <h4>coding</h4>
      <p>
        The app uses React components written in JavaScript ES6 and JSX, which is all transpiled using babel. Sass is used for styling and you can see the use of SVG's for the arrows and dots used for the pagination of the carousel. It also uses ajax to submit form data from the contact screen to the node server, which sends me emails via an smtp service.
      </p>
      <h4>hosTing</h4>
      <p>
        The app is running on a Node.js express server, which resides on an AWS EC2 instance running Ubuntu 14.04.
      </p>
    </div>
  );
}

export default AboutPage4;
