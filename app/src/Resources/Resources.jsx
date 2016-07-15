import React from 'react'

import './resources.sass'

const Resources = () => (
  <section className='page-resources' id='resources'>
    <h2>rEsourcEs</h2>
    <p>
      Code School and Stack Overflow were my main sources for learning. However, these links really helped me and maybe they'll help you too.
    </p>
    <ul>
      <li>
        I was introduced to this
        <a href='https://daveceddia.com/timeline-for-learning-react/'>
          timeline for learning React
        </a>
        early on and it helped me to slow down and pace myself for all that I was about to learn
      </li>
      <li>
        SurviveJS has very informative
        <a href='http://survivejs.com/webpack/'>
          webpack guide
        </a>
        and also a
        <a href='http://survivejs.com/react/'>
          react guide
        </a>
        that I often used as a reference
      </li>
      <li>
        Wes Bos has a great guide for
        <a href='https://learnredux.com/'>
          learning redux
        </a>
        that I followed and used as the basis for my redux counter project
      </li>
      <li>
        When I was in need of style inspiration I often turned to
        <a href='http://tympanus.net/codrops/'>
          Codrops
        </a>
      </li>
      <li>
        When looking at online examples of ES5 code this
        <a href='https://babeljs.io/blog/2015/06/07/react-on-es6-plus'>
          babeljs blog
        </a>
        helped me understand them in ES6+ code
      </li>
      <li>
        Starting out with redux, I turned to this cartoon guide to
        <a href='https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.lzupzyb8r'>
          flux
        </a>
        to help understand what idea redux was built upon and the problem it solves
      </li>
      <li>
        This cartoon guide to
        <a href='https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.u0jr6w64z'>
          redux
        </a>
        helped to understand how redux solved the problems it saw in flux
      </li>
    </ul>
  </section>
)

export default Resources
