import React, { PropTypes } from 'react';

class ResourceLinks extends React.Component {
  render() {
    const links = ([
      {
        topic: 'react',
        content:
        <p>
          I was introduced to this
          <a href='https://daveceddia.com/timeline-for-learning-react/'>
            timeline for learning React
          </a>
          at the beginning of my endeavour, and I recommend any newcommers to keep this short article in mind at the beginning of their journey
        </p>
      },
      {
        topic: 'webpack',
        content:
        <p>
          SurviveJS has very informative
          <a href='http://survivejs.com/webpack/'>
            webpack guide
          </a>
          and also a
          <a href='http://survivejs.com/react/'>
            react guide
          </a>
          that I often used as a reference
        </p>
      },
      {
        topic: 'css',
        content:
        <p>
          When I was in need of style inspiration I often turned to
          <a href='http://tympanus.net/codrops/'>
            Codrops
          </a>
        </p>
      },
      {
        topic: 'js',
        content:
          <p>
          When looking at tutorials and examples written in ES5 code, this
          <a href='https://babeljs.io/blog/2015/06/07/react-on-es6-plus'>
            babeljs blog
          </a>
          was my rosetta stone to convert it into ES6+ code
        </p>
      },
      {
        topic: 'redux',
        content:
        <p>
          Starting out with redux, I turned to this cartoon guide to
          <a href='https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.lzupzyb8r'>
            flux
          </a>
          to help understand what idea redux was built upon and the problem it solves
        </p>
        },
      {
        topic: 'redux',
        content:
        <p>
          This cartoon guide to
          <a href='https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.u0jr6w64z'>
            redux
          </a>
          helped to understand how redux solved the problems it saw in flux
        </p>
      },
      {
        topic: 'redux',
        content:
        <p>
          Wes Bos has a great guide for
          <a href='https://learnredux.com/'>
            learning redux
          </a>
          that I followed and used as the basis for my redux counter project
        </p>
      }
    ]);
    return (
      <div>
        <h3>
          {this.props.topicToDisplay}
        </h3>
        <ul>
          {links.map((link, index) => {
            console.log('index: ', index);
            if( link.topic === this.props.topicToDisplay ){
              return (
                <li key={index}>
                  {link.content}
                </li>
              )
            }
          } )}
        </ul>
      </div>
    )
  }
}

ResourceLinks.propTypes = {
  topicToDisplay: PropTypes.string.isRequired
}

export default ResourceLinks
