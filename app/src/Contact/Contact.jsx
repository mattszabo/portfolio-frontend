import React from 'react'

import { GmailLogo, GitHubLogo, LinkedInLogo } from './ContactLogos'
import './contact.sass'

const Contact = () => (
  <section className='page-contact' id='contact'>
    <h2>conTAcT</h2>
    <div className='contact-icons'>
      <h3>mATT szAbo</h3>
      <ul>
        <li><GmailLogo /></li>
        <li><LinkedInLogo /></li>
        <li><GitHubLogo /></li>
      </ul>
    </div>
  </section>
)

export default Contact
