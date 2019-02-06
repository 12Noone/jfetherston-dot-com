import React, { Component } from "react";
import PropTypes from 'prop-types';
import { viewerOptionsData } from '../viewerOptionsData';

class Menu extends Component {

  render() {
    const { setPanel, activeLink } = this.props;

    return (
      <div className="menu-container">
        <div className="heading">
          <h1 className="d-none d-sm-block">Jill Fetherston</h1>
          <h1 className="d-block d-sm-none">Jill F.</h1>
        </div>
        <div className="nav-container">
          <ul className="inline-list">
            <li onClick={() => setPanel('about', viewerOptionsData)} className={activeLink === 'about' ? 'active-link' : ''}>About Me</li>
            <li onClick={() => setPanel('contact', viewerOptionsData) } className={activeLink === 'contact' ? 'active-link' : ''}>Contact Me</li>
          </ul>
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

