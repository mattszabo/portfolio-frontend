import React from 'react'

const About = () => {
  return (
    <section className='page-about' id='about'>
      <h1> ABOUT </h1>
      <p>
        I come from a DevOps background where I supported a Java application with an SQL backend, hosted on an an AWS EC2 app server and Oracle RDS instance. To be effective at that role I also utilised my knowledge of unix tools. I have been learning front end web development since the beginning of May 2016 without any prior knowledge of the process or technoliges involved.
      </p>
      <p>
        This single page app demonstates much of what I have learned so far. It is written in JS es6 (transpiled with babel) and uses react components and sass styling. For development I used webpack with hot module replacement, and for the build you see here I ran a production build - also with webpack - and served the resulting js and css on a nodejs express server, which resides on an AWS EC2 server housed in Sydney, Australia.
      </p>

      Spefically, since I began I have focussed on developing the following skills:
      <ul>
        <li>JavaScript</li>
        <li>CSS/Sass</li>
        <li>React</li>
        <li>Webpack</li>
        <li>Node/express</li>
        <li>Git</li>
        <li>Redux</li>
      </ul>
    </section>
  )
}

export default About
