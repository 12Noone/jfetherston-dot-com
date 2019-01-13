import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { submitMessage } from '../actions/formActions';

class ContactForm extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <Field
          name='firstName'
          component='input'
          type='text'
          placeholder='First Name'
        />
        <label htmlFor="last-name">Last Name</label>
        <Field
          name='lastName'
          component='input'
          type='text'
          label='Last Name'
          placeholder='Last Name'
        />
        <label htmlFor="message">Email</label>
        <Field
          name='email'
          component='input'
          type='email'
          label='Email Address'
          placeholder='Email Address'
        />
        <label htmlFor="message">Subject</label>
        <Field
          name='subject'
          component='input'
          type='text'
          label='subject'
          placeholder='Subject'
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

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(submitMessage(value))
});

export default ContactForm = connect(null, mapDispatchToProps)(reduxForm({ form: 'contact'})(ContactForm));