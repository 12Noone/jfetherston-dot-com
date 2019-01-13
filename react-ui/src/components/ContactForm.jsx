import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { submitMessage } from '../actions/formActions';
import '../stylesheets/ContactForm.less';

class ContactForm extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <div id="form-container">
        <div>
          <form onSubmit={handleSubmit} className="form">
            <div className="bi-column">
              <div className="form-element">
                <label className="form-label" htmlFor="message">Email</label>
                <Field
                  name='email'
                  component='input'
                  type='email'
                  label='Email Address'
                  placeholder='Email Address'
                />
              </div>
              <div className="form-element">
                <label className="form-label" htmlFor="message">Subject</label>
                <Field
                  name='subject'
                  component='input'
                  type='text'
                  label='subject'
                  placeholder='Subject'
                />
              </div>
            </div>
            <div className="single-column">
              <div className="form-element">
                <label className="form-label" htmlFor="message">Message</label>
                <Field
                  name='message'
                  component='textarea'
                  type='text'
                  label='Message'
                  placeholder='Say what you say'
                />
              </div>
            </div>
            <button className="submit-btn" type='submit'>Drop a line</button>
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