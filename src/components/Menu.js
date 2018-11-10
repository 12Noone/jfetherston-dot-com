import React, { Component } from "react";
import PropTypes from 'prop-types';
import { viewerOptionsData } from '../viewerOptionsData';

class Menu extends Component {

  render() {
    const { setPanel, activeLink } = this.props;

    return (
      <div className="menu-container container-fluid">
        <div className="col-12">
          <div className="row">
            <div className="pull-left col-6">
              <h1>Jill Fetherston</h1>
            </div>
            <div className="pull-right col-6">
              <ul className="inline-list">
                <li onClick={() => setPanel('about', viewerOptionsData)} className={activeLink === 'about' ? 'active-link' : ''}>About Me</li>
                <li onClick={() => setPanel('contact', viewerOptionsData) } className={activeLink === 'contact' ? 'active-link' : ''}>Contact Me</li>
                <li onClick={() => setPanel('find me', viewerOptionsData)} className={activeLink === 'find me' ? 'active-link' : ''}>Find Me</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  setPanel: PropTypes.func.isRequired,
  hideViewer: PropTypes.func.isRequired,
  activeLink: PropTypes.string.isRequired
}

export default Menu;

