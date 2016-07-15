import React from 'react';

const AboutPage4 = () => {
  return (
    <div className='subpage-about'>
      <h3>AbouT This porTfoLio</h3>
      <p>
        This responsive single page app demonstates much of what I have learned so far.
      </p>
      <h4>developmenT environmenT</h4>
      <p>
        The app was developed using webpack (configured with hot module replacement), git & github for source control, npm for package management and task running, chrome and React dev tools for debugging.
      </p>
      <h4>coding</h4>
      <p>
        The app uses React components written in JavaScript ES6 and JSX, which was all transpiled using babel. Sass was also used for styling and you can see my use of SVG's for the arrow on the home screen and the pagination of the carousel below.
      </p>
      <h4>hosTing</h4>
      <p>
        The app is running on a Node.js express server, which resides on an AWS EC2 instance running Ubuntu.
      </p>
    </div>
  );
}

export default AboutPage4;
