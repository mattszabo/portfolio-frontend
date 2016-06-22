import React from 'react';

const Home = () => {
  return(
    <section className='page-home' id='home'>
      <img src={require('file?emitFile=false!./images/office.jpg')} />
      <h2>matt szabo</h2>
    </section>
  );
}

export default Home
