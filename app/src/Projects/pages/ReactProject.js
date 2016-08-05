import React from 'react';

import { GitHubLogo } from '../../Contact/ContactLogos'
import { WebIcon } from '../../Icons/Icons';

const ReactProject = () => {
  return (
    <div>
      <h3>reAct nAvigAtion tAbs</h3>
      <div className='project-icons'>
        <a href="https://github.com/wekilledit/react-website"><GitHubLogo /></a>
        <a href="http://ec2-54-206-69-241.ap-southeast-2.compute.amazonaws.com:3100"><WebIcon /></a>
      </div>
      <p>
        This project focussed more on the development environment as well as utilizing React components to create a very basic website. The main focus was understanding webpack and babel (enough) to have a featureful and comfortable dev environment.
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
