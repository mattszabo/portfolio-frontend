import React from 'react';

import { GitHubLogo } from '../../Contact/ContactLogos'
import { WebIcon } from '../../Icons/Icons';

const ReactProject = () => {
  return (
    <div>
      <h3>React tabs</h3>
      <p>
        <a href="https://github.com/wekilledit/react-website"><GitHubLogo /></a>
        <a href="http://ec2-54-206-69-241.ap-southeast-2.compute.amazonaws.com:3100"><WebIcon /></a>
      </p>
      <p>
        Description: This project focuses on React.
      </p>
      <p>
        This project exposed me to:
      </p>
      <ul>
        <li>Webpack</li>
        <li>JavaScript ES6 & JSX</li>
        <li>Babel</li>
        <li>ESLint</li>
        <li>React</li>
        <li>React Router</li>
      </ul>
    </div>
  );
}

export default ReactProject;
