import React from "react";
import PropTypes from 'prop-types';
import "../stylesheets/Viewer.less";

const Viewer = ({ handleClose, show, viewerOptions }) => {
  const showHideClassName = show ? "viewer display-block" : "viewer display-none";
  return (
    <div className={showHideClassName}>
      <section className="viewer-main">
        <div className="close-viewer" onClick={handleClose}>
          X
        </div>
        <div className="viewer-body container">
          <div className="col-sm-12">
            <div className="row">
              {viewerOptions.image ? (
                <div className="image-container col-sm-5">
                  <img src={viewerOptions.image} alt="Yours truly" />
                </div>
              ) : ( 
                null
              )}
              <div className="copy-container col-sm-5">
                <h1>{viewerOptions.header}</h1>
                <h5>{viewerOptions.subHeading}</h5>
                <p>{viewerOptions.bodyCopy}</p>
              </div>
            </div>
          </div>
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
