import React from 'react'
// import SwipeableViews from 'react-swipeable-views';

import Carousel from '../Carousel/Carousel'
import './about.sass'

const About = () => {
  const style = {
    height: '70vh'
  }
  return (
    <section className='page-about' id='about'>
      <h2>AbouT</h2>
      <Carousel startingSlide={1}>
        <div style={style}><AboutPage0 /></div>
        <div style={style}><AboutPage1 /></div>
        <div style={style}><AboutPage2 /></div>
        <div style={style}><AboutPage3 /></div>
      </Carousel>
    </section>
  )
}

export default About

const AboutPage0 = () => {
  return (
    <div>
      <img src={require('./images/hire-me.jpg')} />
      <p>Matt Szabo: Frontend developer looking for new opportunities</p>
      <p>(Swipe or click the dots to learn more)</p>
    </div>
  );
}

const AboutPage1 = () => {
  return (
    <div className='about-page'>
        <p>
          I began learning how to develop for the web at the beginning of May 2016. Since then I have focussed my efforts towards the following skills:
        </p>
        <ul>
          <li>JavaScript with a focus on ES6</li>
          <li>CSS, Sass, and SVG</li>
          <li>React</li>
          <li>Redux</li>
          <li>Webpack with hot module replacement</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
          <li>Browser dev tools (Chrome/React/Redux)</li>
          <li>Responsive & mobile first design</li>
        </ul>
    </div>
  );
}

const AboutPage2 = () => {
  return (
    <div className='about-page'>
      <h3>My background</h3>
      <p>
        I graduated from Computer Science at Monash University and began work in development and operations (DevOps). My most notable experience in this field is my previous position at Shine Technologes where I worked for 5 years. There I supported a large Java application with an SQL backend all hosted on Amazon's AWS architecture. To be effective at the role I utilised and improved on the following skills:
      </p>
      <ul>
        <li>Java</li>
        <li>SQL</li>
        <li>UNIX tools</li>
        <li>AWS cloud management</li>
        <li>Exceptional problem solving</li>
      </ul>
      <p>
         Another key asset learned during my time in that role was the ability to rapidly learn and understand new technolgies in an ever changing world of programming techniques, frameworks and languages.
      </p>
    </div>
  );
}

const AboutPage3 = () => {
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


{/*<p>
  <img src={require('./images/hire-me.jpg')} />

</p>
<p>
  Since my time in DevOps concluded, I have started fresh with front end web development and its related technologies since the beginning of May, 2016.
</p>
<p>

</p>
*/}
