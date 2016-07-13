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
        className='page0'
        to='page1'
        smooth={true}
        duration={500}
        isDynamic={true}
      >
        <DownArrow />
      </Link>
    </section>
  );
}

export default Home
