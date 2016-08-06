import React from 'react';

import { GitHubLogo } from '../../Contact/ContactLogos'
import { WebIcon } from '../../Icons/Icons';

const ReduxProject = () => {
  return (
    <div>
      <h3>redux counters</h3>
      <div className='project-icons'>
        <a href="https://github.com/wekilledit/react-redux-website"><GitHubLogo /></a>
        <a href="http://countergrid.mattcodes.com.au"><WebIcon /></a>
      </div>
      <p>
        I began Redux with some trial and error to create <a href='http://counters.mattcodes.com.au'>these counters</a>. Next I followed the <a href='https://learnredux.com/'>learn redux</a> tutorial, which showed me how to make an instagram type app. Using that as a starting point I created this simple counter app.
      </p>
      <p>
        This project exposed me to:
      </p>
      <ul>
        <li>Redux</li>
        <li>Flexbox</li>
      </ul>
    </div>
  );
}

export default ReduxProject;
