import React, { Component } from "react";
import PropTypes from 'prop-types';
import _ from 'lodash';
import "../stylesheets/Project.less";
import { projectData } from '../viewerOptionsData.js';

class Project extends Component {
  constructor(props) {
    super(props);
    this.renderProjectTile = this.renderProjectTile.bind(this);
  }

  renderProjectTile() {
    const { showViewer } = this.props;
    return (
      projectData.map((project, idx) => (
        <div className="project-container" key={idx}>
          <div className={['project-tile', project.color].join(' ')} onClick={() => showViewer(project.key, projectData)}>
            <div className="project-copy">
              <h5>{project.header}</h5>
            </div>
          </div>
        </div>
      ))
    );
  }

  render() {
    return (
      <div id="projects">
        { this.renderProjectTile() }
      </div>
    );
  };
}

Project.propTypes = {
  viewerOptions: PropTypes.shape({})
};

export default Project;
