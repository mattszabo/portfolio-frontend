import React from 'react'
import className from 'classname';
import $ from 'jquery';

import { GmailLogo, GitHubLogo, LinkedInLogo } from './ContactLogos'
import './contact.sass'

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      isEmailSendTestAvailable: true,
      isEmailSent: false,
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
      contactEmail: e.target.value.trim()
    })
  }
  handleMessageChange = (e) => {
    this.setState({
      contactMessage: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isContactReadyToSubmit()) {
      console.log('valid submit');

      //build email object
      const contactEmailSubmission = {
        contactName: this.state.contactName,
        contactEmail: this.state.contactEmail,
        contactMessage: this.state.contactMessage
      }
      $.ajax({
        url: '/api/emails',
        dataType: 'json',
        type: 'POST',
        data: contactEmailSubmission,
        success: () => {
          this.setState({
            isEmailSendTestAvailable: false,
            isEmailSent: true,
            contactName: '',
            contactEmail: '',
            contactMessage: ''
          })
        },
        error: (xhr, status, err) => {
          console.error('/api/emails/', status, err.toString());
        }
      });
    }
  }
  isContactReadyToSubmit = () => {
    return (
      this.state.contactName &&
      this.state.contactMessage &&
      this.isValidEmail() &&
      !this.state.isEmailSent
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
    if(!this.state.isEmailSent) {
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
        comma = true
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
    return 'Email delivered.'
  }
  handleSentCheckbox = () => {
    if(this.state.isEmailSendTestAvailable) {
      this.setState({
        isEmailSent: !this.state.isEmailSent
      })
    }
  }
  render() {
    const hText = this.printHelpText();

    // SET DYNAMIC STYLE CLASSES
    const pageContactClass = className({
      'email-sent': this.state.isEmailSent,
      'page-contact': true
    })
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
    const emailSendSimulationClass = className({
      'mobile-hidden': true,
      'email-send-simulation': true,
      'email-send-simulation-active': this.state.isEmailSendTestAvailable
    })

    // ACTUAL RENDERING
    return (
      <section className={pageContactClass} id='contact'>
        <h2>conTAcT</h2>
        <div className='contact-icons'>
          <ul>
            <li><a href='http://www.linkedin.com/in/szabomatt'><LinkedInLogo /></a></li>
            <li><a href='https://github.com/wekilledit'><GitHubLogo /></a></li>
            <li><a href='mailto:szabo.matthew@gmail.com'><GmailLogo /></a></li>
          </ul>
        </div>
        <p className='p-text mobile-hidden'>
          Send an email to szabo.matthew@gmail.com right from here.
        </p>
        <p className='mobile-visible'>
          To send an email to szabo.matthew@gmail.com, click the gmail icon above
        </p>
        <p className={emailSendSimulationClass}>
          <input type="checkbox" onClick={this.handleSentCheckbox}/> Simulate state change to see what happens when you send an email.
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
              value={this.state.contactName}
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
              value={this.state.contactEmail}
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
              value={this.state.contactMessage}
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
