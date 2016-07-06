import React from 'react';

import DownArrow from './svg/DownArrow';
import './home.sass'

const Home = () => {
  return(
    <section className='page-home' id='home'>
      <h1>mATT</h1>
      <h1>sZAbo</h1>
      <a href='#about'><DownArrow /></a>
    </section>
  );
}

export default Home
