import React from 'react';

import SingleProject from './SingleProject';
import Carousel from '../../Carousel/Carousel';
import '../projects.sass'

class Projects extends React.Component {
  render() {

    return (
      <section className='page-projects' id='projects'>
        <h2>proJEcTs</h2>
        <p>
          In order to learn, I started a series of git projects. While each project focuses on a spefic skillset, they also had a secondary focus on creating a functional development environment.
        </p>
        <p>
          List of Git projects:
        </p>
        <p>
          <strong>THIS IS WHERE I SHOULD INTRODUCE A CAROUSEL TO SWIPE BETWEEN THE DIFFERENT PROJECTS</strong>
        </p>

        <ul>
          <li>Angular:javascript/single page/angular/build processes</li>
          <li>React: further javascript/single page/react/webpack/babel transpiling/es6</li>
          <li>React redux: further react/redux/source structure/testing</li>
          <li>This porfolio: responsive design/jquery</li>
        </ul>
        <Carousel>
          <div  className='p1'>
            <SingleProject title={'1'}/>
          </div>
          <div style={{height: '150px'}} className='p2'>
            <SingleProject />
          </div>
          <div style={{height: '250px'}} className='p3'>
            <SingleProject />
          </div>
        </Carousel>
      </section>
    )
  }
}

export default Projects
