import React from 'react';

import DownArrow from './svg/DownArrow';
import './home.sass'

const Home = () => {
  return(
    <section className='page-home' id='home'>
      <div>
        <h2>MATT SZABO</h2>
        <a href='#about'><DownArrow /></a>
      </div>
    </section>
  );
}

export default Home
