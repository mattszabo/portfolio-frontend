import React from 'react';

const Home = () => {
  return(
    <section className='page-home' id='home'>
      <img src={require('file?emitFile=false!./images/mr.svg')} alt="Matt Rulz"/>
    </section>
  );
}

export default Home
