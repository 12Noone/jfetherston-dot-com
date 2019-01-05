import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class ContactForm extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <Field
          name='first-name'
          component='input'
          type='text'
          placeholder='First Name'
        />
        <label htmlFor="last-name">Last Name</label>
        <Field
          name='last-name'
          component='input'
          type='text'
          label='Last Name'
          placeholder='Last Name'
        />
        <label htmlFor="message">Message</label>
        <Field
          name='message'
          component='textarea'
          type='text'
          label='Message'
          placeholder='Say what you say'
        />
        <button type='submit'>Say Hi</button>
      </form>
    )
  }
}

export default ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)