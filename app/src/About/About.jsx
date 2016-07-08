import React from 'react'

import Carousel from '../Carousel/Carousel'
import './about.sass'

const About = () => {
  return (
    <section className='page-about' id='about'>
      <h2>AbouT</h2>
      <Carousel buttonStyle='button-side'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Carousel>
    </section>
  )
}

export default About

{/*<p>
  <img src={require('./images/hire-me.jpg')} />
  I come from a DevOps background, where I supported a large Java application with an SQL backend, all hosted by Amazon on an AWS EC2 app server and Oracle RDS instance. To be effective at that role I utilised my <strong>Java</strong>, <strong>SQL</strong>, and <strong>UNIX tools</strong> knowledge and developed exceptional <strong>problem solving</strong> skills. Another key asset learned during my time in that role was the ability to <strong>rapidly learn</strong> new technolgies in an ever changing world of programming techniques and languages.
</p>
<p>
  Since my time in DevOps concluded, I have started fresh with front end web development and its related technologies since the beginning of May, 2016.
</p>
<p>
  This single page app demonstates much of what I have learned so far. It was developed using <strong>webpack</strong>, <strong>git</strong>, <strong>npm</strong>, <strong>chrome dev tools</strong>, and <strong>React dev tools (for chrome)</strong>. It is written in <strong>JavaScript ES6</strong>, which was transpiled using <strong>babel</strong>, uses <strong>React</strong> components and <strong>Sass</strong> for styling. The app is also hosted on a <strong>Node.js</strong> express server, which resides on an AWS EC2 server housed in Sydney, Australia.
</p>
<p>
  Spefically, since I began I have focussed on developing the following skills:
</p>
<ul>
  <li>JavaScript ES6</li>
  <li>CSS/Sass</li>
  <li>React</li>
  <li>Redux</li>
  <li>Webpack (w/ hot reloading)</li>
  <li>Node.js</li>
  <li>Git</li>
  <li>React/redux/chrome dev tools</li>
  <li>Mobile first design</li>
</ul>*/}
