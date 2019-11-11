import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { submitMessage } from '../actions/formActions';
import '../stylesheets/ContactForm.less';
import * as Validate from './Validations'
import { renderField, RenderTextareaField } from './formElements';

class ContactForm extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <div id="form-container">
        <div>
          <form onSubmit={handleSubmit} className="form">
            <div className="bi-column column">
              <div className="form-element">
                <label className="form-label" htmlFor="message">EMAIL ADDRESS</label>
                <Field
                  name='email'
                  component={renderField}
                  type='email'
                  placeholder='Email Address'
                  required
                  validate={[Validate.REQUIRED, Validate.EMAIL]}
                />
              </div>
              <div className="form-element">
                <label className="form-label" htmlFor="message">SUBJECT</label>
                <Field
                  name='subject'
                  component={renderField}
                  type='text'
                  placeholder='Subject'
                  validate={[Validate.REQUIRED, Validate.MAX_LENGTH_100]}
                  required
                />
              </div>
            </div>
            <div className="single-column column">
              <div className="form-element">
                <label className="form-label" htmlFor="message">MESSAGE</label>
                <Field
                  name='message'
                  component={RenderTextareaField}
                  type='text'
                  placeholder='Say what you say'
                  validate={[Validate.REQUIRED, Validate.MAX_LENGTH_1000]}
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button className="submit-btn" type='submit'>Drop a line</button>
            </div>
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