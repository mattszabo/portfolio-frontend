import React from 'react';

import Carousel from '../Carousel/Carousel';
import PortfolioProject from './pages/PortfolioProject';
import ReduxProject from './pages/ReduxProject';
import AngularProject from './pages/AngularProject';
import ReactProject from './pages/ReactProject';
import MainPage from './pages/MainPage';

import './projects.sass'

const Projects = () => {
  const style = {
    height: '70vh'
  }
  return (
    <section className='page-projects' id='projects'>
      <h2>projects</h2>
      <Carousel startingSlide={1}>
        <div style={style}><MainPage /></div>
        <div style={style}><AngularProject /></div>
        <div style={style}><ReactProject /></div>
        <div style={style}><ReduxProject /></div>
        <div style={style}><PortfolioProject /></div>
      </Carousel>
    </section>
  )
}

export default Projects
