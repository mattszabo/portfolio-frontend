import React from 'react';

import './home.sass'

const Home = () => {
  return(
    <section className='page-home' id='home'>
      <div className='my-image'>
        <h1>Matt</h1>
        <img src={require('./images/hire-me.jpg')} />
      </div>
    </section>
  );
}

export default Home
