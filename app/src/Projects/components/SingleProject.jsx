import React, { PropTypes } from 'react';

class SingleProject extends React.Component {
  render() {
    return (
      <div className='single-project'>
        <h2>Project {this.props.title}</h2>
        <div className='project-screenshot'></div>
        <p>Footer</p>
      </div>
    );
  }
}

SingleProject.propTypes = {
  title: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool
}

export default SingleProject;
