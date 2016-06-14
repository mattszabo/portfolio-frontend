import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
