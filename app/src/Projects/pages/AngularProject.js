import React from 'react';

import { GitHubLogo } from '../../Contact/ContactLogos'
import { WebIcon } from '../../Icons/Icons';

const AngularProject = () => {
  return (
    <div>
      <h3>Angular todo list</h3>
      <div className='project-icons'>
        <a href="https://github.com/wekilledit/angular-website"><GitHubLogo /></a>
        <a href="http://angulartodo.mattcodes.com.au/#/mytodo"><WebIcon /></a>
      </div>
      <p>
        This was the first piece of web development I was exposed to. It began with a tutorial on how to generate a yeoman angular boilerplate and create a todo list, which I continued experimenting with afterwards.
      </p>
      <p>
        This project exposed me to:
      </p>
      <ul>
        <li>Yeoman</li>
        <li>Bower</li>
        <li>Grunt</li>
        <li>npm</li>
        <li>Node.js and express</li>
        <li>JavaScript, HTML, CSS</li>
        <li>Angular</li>
        <li>Single page app design</li>
      </ul>
    </div>
  );
}

export default AngularProject;
