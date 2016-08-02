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
      contactName: e.target.value.trim()
    })
  }
  handleEmailChange = (e) => {
    this.setState({
      contactEmail: e.target.value.trim()
    })
  }
  handleMessageChange = (e) => {
    this.setState({
      contactMessage: e.target.value.trim()
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isContactReadyToSubmit()) {
      console.log('valid submit');
    }
  }
  isContactReadyToSubmit = () => {
    return (
      this.state.contactName &&
      this.state.contactMessage &&
      this.isValidEmail()
    )
  }
  isValidEmail = () => {
    let isValid = false;
    let email = this.state.contactEmail;
    if(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isValid = re.test(email);
    }
    return (
      isValid
    )
  }
  printHelpText() {
    let helpText = 'Please fill out the sections: ';
    let comma = false;
    if(!this.state.contactName) {
      helpText += '\nContact Name'
      comma = true
    }
    if(!this.state.contactEmail) {
      if (comma) {
        helpText += ', '
      }
      helpText += '\nEmail Address'
      comma = true //redundant if already true, could use better logic
    } else if (!this.isValidEmail()) {
      if (comma) {
        helpText += ', '
      }
      helpText += '\nEmail Address (not valid)'
    }
    if(!this.state.contactMessage) {
      if(comma) {
        helpText += ', '
      }
      helpText += '\nMessage'
    }
    return (
      helpText + '.'
    )
  }
  render() {
    const hText = this.printHelpText();
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
    const submitButtonClass = className({
      'contact-submit': true,
      active: this.isContactReadyToSubmit()
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
          Send an email to szabo.matthew@gmail.com right from here.
        </p>
        <p>
          Tip: If the send button at the bottom is grayed out, hover over it for help.
        </p>
        <p className='mobile-visible'>
          To send an email to szabo.matthew@gmail.com, click the gmail icon above
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
          <div className={submitButtonClass}>
            <p>{hText}</p>
            <input
              className='submit-btn'
              type="submit"
              value="Send"
            />
        </div>
        </form>
      </section>
    )
  }
}

export default Contact
