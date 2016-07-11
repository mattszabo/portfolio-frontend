import React from 'react';

const AboutPage4 = () => {
  return (
    <div className='about-page'>
      <h3>About this portfolio</h3>
      <p>
        This single page app demonstates much of what I have learned so far.
      </p>
      <h4>Development environment</h4>
      <p>
        The app was developed using webpack (configured with hot module replacement), git & github for source control, npm for package management and basic command line tasks (start & build), chrome dev tools, and React dev tools for debugging.
      </p>
      <h4>Coding</h4>
      <p>
        The app uses React components written in JavaScript ES6 and JSX, which was transpiled using babel. Sass was also used for styling and you can see my use of SVG for the arrow on the home screen.
      </p>
      <h4>Hosting</h4>
      <p>
        The app is also hosted on a <strong>Node.js</strong> express server, which resides on an AWS EC2 server housed in Sydney, Australia.
      </p>
    </div>
  );
}

export default AboutPage4;
