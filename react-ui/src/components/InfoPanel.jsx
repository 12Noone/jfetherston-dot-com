import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../stylesheets/InfoPanel.less'
import ContactForm from './ContactForm';

class InfoPanel extends Component {

  render() {
    const { panelData } = this.props;
    return (
      <div className="hero-container container">
        <div className="panel-container">
        {panelData.key === 'contact' ? (
          [
            <div className="panel-copy">
              <h1 className="heading">{panelData.header}</h1>
              <h2 className="panel-subheading">{panelData.subHeading}</h2>
              <p>{panelData.bodyCopy}</p>
            </div>,
            <ContactForm />
          ]
        ) : (
          <div className="panel-copy">
            <h1 className="heading">{panelData.header}</h1>
            <h2 className="panel-subheading">{panelData.subHeading}</h2>
            <p>{panelData.bodyCopy}</p>
          </div>
        )}
        </div>
        <div className="arrow-container">
          <a href="#projects" className="arrow-motion-box">
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

