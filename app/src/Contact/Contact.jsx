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
  handleNameChange = (e) => {
    this.setState({
      contactName: e.target.value
    })
    console.log('state: ', this.state)
  }
  render() {
    const contactNameClass = className({
      'input': true,
      'input--haruki': true,
      'input--filled': this.state.contactName.length > 0
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
              className='input__field input__field--haruki'
              type="text"
              id="input-1"
              onChange={this.handleNameChange}
            />
            <label className="input__label input__label--haruki" htmlFor="input-1">
              <span className="input__label-content input__label-content--haruki">First Name</span>
            </label>
          </span>
        </form>
      </section>
    )
  }
}

export default Contact
