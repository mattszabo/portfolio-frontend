import React from 'react'
import className from 'classname';

import { GmailLogo, GitHubLogo, LinkedInLogo } from './ContactLogos'
import './contact.sass'

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      contactEmail: '',
      contactMessage: ''
    }
    console.log('state: ', this.state)
  }
  handleContactNameChange = (e) => {
    this.setState({
      contactName: e.target.value
    })
    console.log('state: ', this.state)
  }
  handleEmailChange = (e) => {
    this.setState({
      contactEmail: e.target.value
    })
  }
  handleMessageChange = (e) => {
    this.setState({
      contactMessage: e.target.value
    })
  }
  render() {
    const contactNameClass = className({
      'input': true,
      'input-styled': true,
      'input-filled': this.state.contactName.length > 0
    })
    const contactEmailClass = className({
      'input': true,
      'input-styled': true,
      'input-filled': this.state.contactEmail.length > 0
    })
    const contactMessageClass = className({
      'input': true,
      'input-styled': true,
      'input-filled': this.state.contactMessage.length > 0
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
          <div className={contactNameClass}>
            <input
              className='input-field input-field-styled'
              type="text"
              id="contact-name"
              onChange={this.handleContactNameChange}
            />
            <label className="input-label input-label-styled" htmlFor="contact-name">
              <span className="input-label-content input-label-content-styled">Contact Name</span>
            </label>
          </div>
          <div className={contactEmailClass}>
            <input
              className='input-field input-field-styled'
              type="text"
              id="contact-email"
              onChange={this.handleEmailChange}
            />
            <label className="input-label input-label-styled" htmlFor="contact-email">
              <span className="input-label-content input-label-content-styled">Email Address</span>
            </label>
          </div>
          <div className={contactMessageClass}>
            <input
              className='input-field input-field-styled'
              type="ggd"
              id="contact-message"
              onChange={this.handleMessageChange}
            />
          <label className="input-label input-label-styled" htmlFor="contact-message">
              <span className="input-label-content input-label-content-styled">Message</span>
            </label>
          </div>
          <input type="submit" value="Send" />
        </form>
      </section>
    )
  }
}

export default Contact
