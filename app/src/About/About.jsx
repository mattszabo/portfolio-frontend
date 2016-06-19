import React from 'react'

const About = () => {
  return (
    <section className='page-about' id='about'>
      <h1> ABOUT </h1>
      <p>
        My name is Matt and I come from a Java/SQL background and have decent knowledge of unix tools and bash scripting. I've been learning front end web development from scratch for about 6 weeks.
        This single page app shows what I've learned so far. It's written in JS es6 (transpiled with babel) and uses react components and sass styling. For development I used webpack with hot module replacement, and for the build you see here I ran a production build - also with webpack - and served the resulting js and css on a nodejs express server, which resides on an AWS EC2 server housed in Sydney, Australia.
      </p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
    </section>
  )
}

export default About
