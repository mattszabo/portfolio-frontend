import React from 'react';

import { GitHubLogo } from '../../Contact/ContactLogos'

const PortfolioProject = () => {
  return (
    <div>
      <h3>I'm the Portfolio</h3>
      <p>
        <a href="https://github.com/wekilledit/portfolio-frontend"><GitHubLogo /></a>
      </p>
      <p>
        This project focuses on responsive mobile first web development and React. The site was designed with smart phones and laptops in mind. If you're on a computer, try resizing the browser window or use browser dev tools to see what it might look like on a mobile device.
      </p>
      <p>
        This project exposed me to:
      </p>
      <ul>
        <li>Responsive design</li>
        <li>jQuery</li>
        <li>Sass</li>
      </ul>
    </div>
  )
}

export default PortfolioProject;
