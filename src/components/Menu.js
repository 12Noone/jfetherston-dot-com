import React, { Component } from "react";
import PropTypes from 'prop-types';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { showViewer, hideViewer } = this.props;

    return (
      <div className="menu-container container-fluid">
        <div className="col-12">
          <div className="row">
            <div className="pull-left col-6">
              <h1>Jill Fetherston</h1>
            </div>
            <div className="pull-right col-6">
              <ul className="inline-list">
                <li onClick={() => showViewer('about')}>About</li>
                <li onClick={() => showViewer('contact')}>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  showViewer: PropTypes.func.isRequired,
  hideViewer: PropTypes.func.isRequired
}

export default Menu;

