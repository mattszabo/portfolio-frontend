import React from 'react';

import Carousel from '../Carousel/Carousel';
import AboutPage1 from './pages/AboutPage1';
import AboutPage2 from './pages/AboutPage2';
import AboutPage3 from './pages/AboutPage3';
import AboutPage4 from './pages/AboutPage4';
import AboutPage5 from './pages/AboutPage5';
import './about.sass';

const About = () => {
  const style = {
    height: '70vh'
  }
  return (
    <section className='page-about' id='about'>
      <h2>AbouT</h2>
      <Carousel startingSlide={1}>
        <div style={style}><AboutPage1 /></div>
        <div style={style}><AboutPage2 /></div>
        <div style={style}><AboutPage3 /></div>
        <div style={style}><AboutPage4 /></div>
        <div style={style}><AboutPage5 /></div>
      </Carousel>
    </section>
  );
}

export default About;
