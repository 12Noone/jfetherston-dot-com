import React, { Component } from "react";
import PropTypes from 'prop-types';
import "../stylesheets/Viewer.less";

const Viewer = ({ handleClose, show, viewerOptions }) => {
  const showHideClassName = show
    ? "viewer display-block"
    : "viewer display-none";

  return (
    <div className={showHideClassName}>
      <section className="viewer-main">
        <div className="viewer-header">
        <h1>{viewerOptions.header}</h1>
        </div>
      </section>
    </div>
  );
};

Viewer.propTypes = {
  //   showViewer: PropTypes.func.isRequired,
  //   hideViewer: PropTypes.func.isRequired
  viewerOptions: PropTypes.shape({})
};

export default Viewer;
