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
  }
  handleContactNameChange = (e) => {
    this.setState({
      contactName: e.target.value
    })
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
  handleSubmit = (e) => {
    e.preventDefault();
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
      'contact-message': true,
      'input': true,
      'input-styled': true,
      'input-filled': this.state.contactMessage.length > 0
    })
    return (
      <section className='page-contact' id='contact'>
        <h2>conTAcT</h2>
        <div className='contact-icons'>
          <ul>
            <li><a href='http://www.linkedin.com/in/szabomatt'><LinkedInLogo /></a></li>
            <li><a href='https://github.com/wekilledit'><GitHubLogo /></a></li>
            <li><a href='mailto:szabo.matthew@gmail.com'><GmailLogo /></a></li>
          </ul>
        </div>
        <p className='mobile-hidden'>
          To email Matt at szabo.matthew@gmail.com, either click the gmail icon above or fill out the details below
        </p>
        <p className='mobile-visible'>
          To email Matt at szabo.matthew@gmail.com, click the gmail icon above
        </p>
        <form
          className='contact-email'
          onSubmit={this.handleSubmit}
        >
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
            <textarea
              className='input-field input-field-styled'
              name="description"
              onChange={this.handleMessageChange}
            />
          <label className="input-label input-label-styled" htmlFor="contact-message">
              <span className="input-label-content input-label-content-styled">Message</span>
            </label>
          </div>
          <input
            className='contact-submit'
            type="submit"
            value="Send"
          />
        </form>
      </section>
    )
  }
}

export default Contact
