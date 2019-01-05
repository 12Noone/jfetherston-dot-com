import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { submitMessage } from '../actions/formActions';

class ContactForm extends Component {

  render() {
    const { handleSubmit } = this.props;
    console.log(handleSubmit);
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

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(submitMessage())
});

export default ContactForm = connect(null, mapDispatchToProps)(reduxForm({ form: 'contact'})(ContactForm));