import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="first-name">First Name</label>
      <Field
        name='first-name'
        component='input'
        type='text'
      />
      <label htmlFor="last-name">Last Name</label>
      <Field
        name='last-name'
        component='input'
        type='text'
        label='Last Name'
      />
      <label htmlFor="message">Message</label>
      <Field
        name='message'
        component='textarea'
        type='text'
        label='Message'
      />
    </form>
  );
}

export default ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)