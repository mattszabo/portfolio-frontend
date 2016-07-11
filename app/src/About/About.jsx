import React from 'react'
// import SwipeableViews from 'react-swipeable-views';

import Carousel from '../Carousel/Carousel'
import './about.sass'

const About = () => {
  return (
    <section className='page-about' id='about'>
      <h2>AbouT</h2>
      <Carousel buttonStyle='carousel-dots carousel-buttons'>
        <div style={{height: '400px'}}><AboutPage1 /></div>
        <div style={{height: '400px'}}><AboutPage2 /></div>
        <div style={{height: '400px'}}><AboutPage3 /></div>
      </Carousel>
    </section>
  )
}

export default About

const AboutPage1 = () => {

  return (
    <div className='about-page'>
      <h3>Where I am</h3>
      <img src={require('./images/hire-me.jpg')} />
        <p>
          I began learning how to develop for the web at the beginning of May 2016. Since then I have focussed my learning towards the following skills:
        </p>
        <ul>
          <li>JavaScript with a focus on ES6</li>
          <li>CSS/Sass</li>
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
  const style={
    width: '100px',
    height: '100%',
    marginTop: '1rem'
  }
  return (
    <div className='about-page'>
      <h3>Where I've been</h3>
      <img style={style} src={require('./images/hire-me.jpg')} />
      <p>
        I Come from a DevOps background, where I supported a large Java application with an SQL backend all hosted Amazon's AWS architecture. To be effective at that role I utilised my <strong>Java</strong>, <strong>SQL</strong>, and <strong>UNIX tools</strong> knowledge and developed exceptional <strong>problem solving</strong> skills. Another key asset learned during my time in that role was the ability to <strong>rapidly learn</strong> new technolgies in an ever changing world of programming techniques and languages.
      </p>
    </div>
  );
}

const AboutPage3 = () => {
  const style={
    width: '100px',
    height: '100%',
    marginTop: '1rem'
  }
  return (
    <div className='about-page'>
      <h3>About this page</h3>
      <img style={style} src={require('./images/hire-me.jpg')} />
      <p>
        This single page app demonstates much of what I have learned so far. It was developed using <strong>webpack</strong>, <strong>git</strong>, <strong>npm</strong>, <strong>chrome dev tools</strong>, and <strong>React dev tools (for chrome)</strong>. It is written in <strong>JavaScript ES6</strong>, which was transpiled using <strong>babel</strong>, uses <strong>React</strong> components and <strong>Sass</strong> for styling. The app is also hosted on a <strong>Node.js</strong> express server, which resides on an AWS EC2 server housed in Sydney, Australia.
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
