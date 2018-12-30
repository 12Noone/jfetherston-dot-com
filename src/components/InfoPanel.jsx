import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../stylesheets/InfoPanel.less'

class InfoPanel extends Component {

  render() {
    const { panelData } = this.props;
    return (
      <div className="hero-container">
        <div className="panel-container">
          <div className="panel-copy">
            <h1 className="panel-heading">{panelData.header}</h1>
            <h2 className="panel-subheading">{panelData.subHeading}</h2>
            <p>{panelData.bodyCopy}</p>
          </div>
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

