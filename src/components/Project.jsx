import React from "react";
import PropTypes from 'prop-types';
import "../stylesheets/Project.less";

const Project = () => {

  return (
    <div className="project-container">
      <div className="project-tile blue">
        <div className="project-copy">
          <h5>Themes</h5>
        </div>
      </div>
      <div className="project-tile yellow">
        <div className="project-copy">
          <h5>Theme Listing Redesign</h5>
        </div>
      </div>
      <div className="project-tile green">
        <div className="project-copy">
          <h5>Unification</h5>
        </div>
      </div>
      <div className="project-tile dark-blue">
        <div className="project-copy">
          <h5>Preauth Project</h5>
        </div>
      </div>
      <div className="project-tile pink">
        <div className="project-copy">
          <h5>Guest NOT In Guest List</h5>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  //   showViewer: PropTypes.func.isRequired,
  //   hideViewer: PropTypes.func.isRequired
  viewerOptions: PropTypes.shape({})
};

export default Project;
