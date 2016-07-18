import React from 'react'

import { GmailLogo, GitHubLogo, LinkedInLogo } from './ContactLogos'
import './contact.sass'

const Contact = () => (
  <section className='page-contact' id='contact'>
    <h2>conTAcT</h2>
    <ul>
      <li><GmailLogo /></li>
      <li><LinkedInLogo /></li>
      <li><GitHubLogo /></li>
    </ul>
  </section>
)

export default Contact
