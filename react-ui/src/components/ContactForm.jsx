import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { submitMessage } from '../actions/formActions';

class ContactForm extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container-fluid">
        <div className="col-xs-12">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label className="form-label" htmlFor="message">Email</label>
              <Field
                name='email'
                component='input'
                type='email'
                label='Email Address'
                placeholder='Email Address'
              />
              <label className="form-label" htmlFor="message">Subject</label>
              <Field
                name='subject'
                component='input'
                type='text'
                label='subject'
                placeholder='Subject'
              />
            </div>
            <div className="row">
              <label className="form-label" htmlFor="message">Message</label>
              <Field
                name='message'
                component='textarea'
                type='text'
                label='Message'
                placeholder='Say what you say'
              />
            </div>
            <button type='submit'>Say Hi</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(submitMessage(value))
});

export default ContactForm = connect(null, mapDispatchToProps)(reduxForm({ form: 'contact'})(ContactForm));