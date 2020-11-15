import React from "react";
import { Link, HashRouter as Router } from "react-router-dom";

import logo from "assets/mp-logo-white.png";

import { contactPage } from "app/data/navigation";

export default class NavBar extends React.Component {
  render() {
    function handleClick() {
      this.props.hiddenBtn();
    }

    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3 justify-content-between">
          <Link
            className="navbar-brand"
            to={contactPage.path}
            className="pagination-link"
          >
            <img src={logo} className="mp-logo"></img>
          </Link>

          <button
            className="btn btn-primary btn-toggle-debug"
            type="button"
            onClick={handleClick.bind(this)}
          ></button>
        </nav>
      </Router>
    );
  }
}
