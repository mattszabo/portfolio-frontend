import React from 'react';

import { GitHubLogo } from '../../Contact/ContactLogos'
import { WebIcon } from '../../Icons/Icons';

const ReduxProject = () => {
  return (
    <div>
      <h3>I'm Redux</h3>
      <p>
        <a href="https://github.com/wekilledit/react-redux-website"><GitHubLogo /></a>
        <a href="http://ec2-54-206-69-241.ap-southeast-2.compute.amazonaws.com:3220"><WebIcon /></a>
      </p>
      <p>
        First attempt: http://ec2-54-206-69-241.ap-southeast-2.compute.amazonaws.com:3200/
      </p>
      <p>
        The reduxtagram tutorial: http://ec2-54-206-69-241.ap-southeast-2.compute.amazonaws.com:3210/
      </p>
      <p>
        Description: This project focused on learning Redux. I began with following the tutorial at https://learnredux.com/, which showed me how to make an instagram type app ***LINK***. Using that as a basis I created a simple counter app.
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
