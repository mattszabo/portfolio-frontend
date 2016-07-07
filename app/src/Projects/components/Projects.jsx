import React from 'react';
import Carousel from '../../Carousel/Carousel';

import '../projects.sass'

class Projects extends React.Component {
  onChange(e) {
    console.log(e);
  }
  onClickItem(e) {
    console.log(e);
  }
  onClickThumb(e) {
    console.log(e);
  }
  render() {
    return (
      <section className='page-projects' id='projects'>
        <h2>projects.</h2>
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
          <li>1</li>
          <li>2</li>
          <li className='current'>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </Carousel>
      </section>
    )
  }
}

export default Projects
