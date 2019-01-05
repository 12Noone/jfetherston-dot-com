import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../stylesheets/InfoPanel.less'
import ContactForm from './ContactForm';

class InfoPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactFormVisible: false
    }
  }
  render() {
    const { panelData } = this.props;
    const { contactFormVisible } = this.state;
    return (
      <div className="hero-container">
        <div className="panel-container">
        {contactFormVisible ? (
          <ContactForm />
        ) : (
          <div className="panel-copy">
            <h1 className="heading">{panelData.header}</h1>
            <h2 className="panel-subheading">{panelData.subHeading}</h2>
            <p>{panelData.bodyCopy}</p>
          </div>
        )}
        </div>
        <div className="arrow-container">
          <a href="#projects">
            <span className="arrow" />
          </a>
        </div>
      </div>
    );
  }
}

InfoPanel.propTypes = {
  panelData: PropTypes.shape({})
}

export default InfoPanel;

