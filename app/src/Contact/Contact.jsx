import React from 'react'
import className from 'classname';

import { GmailLogo, GitHubLogo, LinkedInLogo } from './ContactLogos'
import './contact.sass'

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      contactName: ''
    }
    console.log('state: ', this.state)
  }
  handleContactNameChange = (e) => {
    this.setState({
      contactName: e.target.value
    })
    console.log('state: ', this.state)
  }
  render() {
    const contactNameClass = className({
      'input': true,
      'input-styled': true,
      'input-filled': this.state.contactName.length > 0
    })
    return (
      <section className='page-contact' id='contact'>
        <h2>conTAcT</h2>
        <div className='contact-icons'>
          <ul>
            <li><LinkedInLogo /></li>
            <li><GitHubLogo /></li>
            <li><GmailLogo /></li>
          </ul>
        </div>
        <form className='contact-email'>
          <span className={contactNameClass}>
            <input
              className='input-field input-field-styled'
              type="text"
              id="input-1"
              onChange={this.handleContactNameChange}
            />
          <label className="input-label input-label-styled" htmlFor="contact-name">
              <span className="input-label-content input-label-content-styled">Contact Name</span>
            </label>
          </span>
        </form>
      </section>
    )
  }
}

export default Contact
