import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu-container container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="pull-left col-sm-6">
              <h1>Jill Fetherston</h1>
            </div>
            <div className="pull-right col-sm-6">
              <ul className="inline-list">
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;

