import React from 'react';

const AboutPage4 = () => {
  return (
    <div className='subpage-about'>
      <h3>This porTfoLio</h3>
      <p>
        This site is deisgned with responsiveness and mobile first principles in mind to give a consistent look and feel to all screen sizes, and to avoid the mobile view feeling degraded. This means some sections will appear differently depending on the viewing device (see the contact page for a good example of this). Background images of different dimensions and file sizes are loaded separately for different device screen sizes and pixel densities, which ensures load times are as low as possible for each device. The navigation bar links are also intended to slide each section into propper view.
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
