import React from 'react';

import './home.sass'

const Home = () => {
  return(
    <section className='page-home' id='home'>
      <div>
        <h2>Matt Szabo</h2>
        <img src={require('./images/hire-me.jpg')} />
      </div>
    </section>
  );
}

export default Home
