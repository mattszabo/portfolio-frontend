import React from 'react';

import Carousel from '../Carousel/Carousel';
import PortfolioProject from './projects/PortfolioProject';
import ReduxProject from './projects/ReduxProject';
import AngularProject from './projects/AngularProject';
import ReactProject from './projects/ReactProject';
import './projects.sass'

class Projects extends React.Component {
  render() {
    const style = {
      height: '60vh'
    }
    return (
      <section className='page-projects' id='projects'>
        <h2>proJEcTs</h2>
        <p>
          These are the projects I have worked on since beginning web developemnt. I have listed them in the order so you can see a timeline of progress. They are all running on basic Node.js express servers hosted on an Amazon EC2 instance.
        </p>
        <Carousel startingSlide={1}>
          <div style={style}><AngularProject /></div>
          <div style={style}><ReactProject /></div>
          <div style={style}><ReduxProject /></div>
          <div style={style}><PortfolioProject /></div>
        </Carousel>
      </section>
    )
  }
}

export default Projects
