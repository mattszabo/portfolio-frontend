import React from 'react';

import { GitHubLogo } from '../../Contact/ContactLogos'

const PortfolioProject = () => {
  return (
    <div>
      <h3>this portfolio</h3>
      <div className='project-icons'>
        <a href="https://github.com/wekilledit/portfolio-frontend"><GitHubLogo /></a>
      </div>
      <p>
        This project focuses on responsive mobile first web development and React. The site was designed for a smart phone like the iphone 6 and was then adapted for larger screens. This was mostly achieved by using the vh and vw style units.
      </p>
      <p>
        If you're on a computer, try resizing the browser window or use browser dev tools to see what it might look like on a mobile device.
      </p>
      <p>
        This project exposed me to:
      </p>
      <ul>
        <li>Responsive design</li>
        <li>jQuery</li>
        <li>Sass</li>
        <li>Ajax</li>
        <li>More Node.js</li>
      </ul>
    </div>
  )
}

export default PortfolioProject;
