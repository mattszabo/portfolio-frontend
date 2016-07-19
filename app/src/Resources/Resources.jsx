import React from 'react'

import { ReactLogo, ReduxLogo, WebpackLogo, JSLogo, CSS3Logo } from './images/Logos';
import ResourceLinks from './ResourceLinks';
import './resources.sass'

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state={topicToDisplay: 'react'}
  }
  displayLinks = (text) => {
    this.setState({
      topicToDisplay: text
    });
  }
  render() {
    return (
      <section className='page-resources' id='resources'>
        <h2>rEsourcEs</h2>
        <div className='resources-content'>
          <p className='resrouces-hint'>
            (Click the logos to change topic)
          </p>
          <ul className='resource-topics'>
            <li onClick={this.displayLinks.bind(this, 'react')}>
              <ReactLogo    /></li>
            <li onClick={this.displayLinks.bind(this, 'redux')}>
              <ReduxLogo    /></li>
            <li onClick={this.displayLinks.bind(this, 'webpack')}>
              <WebpackLogo  /></li>
            <li onClick={this.displayLinks.bind(this, 'js')}>
              <JSLogo       /></li>
            <li onClick={this.displayLinks.bind(this, 'css')}>
              <CSS3Logo     /></li>
          </ul>
          <ResourceLinks topicToDisplay={this.state.topicToDisplay} />
        </div>
      </section>
    );
  }
}

export default Resources
