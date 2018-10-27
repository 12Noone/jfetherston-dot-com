import React, { Component } from "react";
import PropTypes from 'prop-types';
import "../stylesheets/Project.less";
import { projectData } from '../viewerOptionsData.js';

class Project extends Component {

  render() {
    const { showViewer } = this.props;
    return (
      <div className="project-container">
        <div className="project-tile blue" onClick={() => showViewer('themeDesign', projectData)}>
          <div className="project-copy">
            <h5>Themes</h5>
          </div>
        </div>
        <div className="project-tile yellow" onClick={() => showViewer('themeRedesign', projectData)}>
          <div className="project-copy">
            <h5>Theme Listing Redesign</h5>
          </div>
        </div>
        <div className="project-tile green" onClick={() => showViewer('unification', projectData)}>
          <div className="project-copy">
            <h5>Unification</h5>
          </div>
        </div>
        <div className="project-tile dark-blue" onClick={() => showViewer('preauthPages', projectData)}>
          <div className="project-copy">
            <h5>Preauth Project</h5>
          </div>
        </div>
        <div className="project-tile pink" onClick={() => showViewer('guestNotInGuestList', projectData)}>
          <div className="project-copy">
            <h5>Guest NOT In Guest List</h5>
          </div>
        </div>
      </div>
    );
  };
}

Project.propTypes = {
  //   showViewer: PropTypes.func.isRequired,
  //   hideViewer: PropTypes.func.isRequired
  viewerOptions: PropTypes.shape({})
};

export default Project;
