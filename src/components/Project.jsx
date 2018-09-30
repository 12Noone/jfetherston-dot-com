import React from "react";
import PropTypes from 'prop-types';
import "../stylesheets/Viewer.less";

const Project = ({ handleClose, show, viewerOptions }) => {
  const showHideClassName = show
    ? "viewer display-block"
    : "viewer display-none";
  return (
    <div className="project-container">
      <div className="project-body">
        <h1>hihihi</h1>
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
