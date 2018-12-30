import React, { Component } from "react";
import PropTypes from 'prop-types';
import _ from 'lodash';
import { projectData } from '../viewerOptionsData';
import "../stylesheets/Viewer.less";


class Viewer extends Component {
  constructor(props) {
    super(props);
    this.renderTech = this.renderTech.bind(this);
    this.renderCopy = this.renderCopy. bind(this);
  }

  renderTech(viewerOptions, techItems) {
    if (_.isEmpty(viewerOptions)) {
      return;
    }
    return (
      techItems.map((tech, idx) => (
        <div key={idx} className="tech">{tech}</div>
      ))
    );
  }

  renderCopy(viewerOptions) {
    return (
      <div>
        <h1>{viewerOptions.header}</h1>
        <h5>{viewerOptions.subHeading}</h5>
        <p>{viewerOptions.bodyCopy}</p>
      </div>
    )
  }
  render() {
    const { handleClose, show, viewerOptions } = this.props;
    const showHideClassName = show ? "viewer active" : "viewer";
    return (
      <div className={showHideClassName}>
      <section className="viewer-main">
        <div className="close-viewer" onClick={handleClose}>
          X
        </div>
        <div className="viewer-body">
          <div>
            <div>
              {viewerOptions.image ? (
                <div className="image-container col-sm-5">
                  <img src={viewerOptions.image} alt="Yours truly" />
                </div>
              ) : ( 
                null
              )}
              <div className="copy-container">
                { this.renderCopy(viewerOptions) }
              </div>
              <div className="tech-container">
                <h3>Tech Used:</h3>
                { this.renderTech(viewerOptions, viewerOptions.tech) }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )

  }
};

Viewer.propTypes = {
  //   showViewer: PropTypes.func.isRequired,
  //   hideViewer: PropTypes.func.isRequired
  viewerOptions: PropTypes.shape({})
};

export default Viewer;
