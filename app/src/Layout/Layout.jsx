import React from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='content'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}
