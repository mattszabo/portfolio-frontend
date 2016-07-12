import React from 'react';
import Scroll from 'react-scroll';

import DownArrow from './svg/DownArrow';
import './home.sass'

const { Link } = Scroll;

const Home = () => {
  return(
    <section className='page-home' id='home'>
      <h1>mATT</h1>
      <h1>sZAbo</h1>
      <Link
        activeClass='active'
        className='page0-arrow'
        to='page1'
        spy={true}
        smooth={true}
        duration={500}
      >
        <DownArrow />
      </Link>
    </section>
  );
}

export default Home
