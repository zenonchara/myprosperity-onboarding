import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./app/common/components/navbar";
import Debug from "./app/common/components/debug";
import Pagination from "./app/common/components/pagination";

import { toggleDebug } from "./appSlice";
import navigation from "app/data/navigation";

export default connect(
  (state) => ({
    state,
  }),
  {
    toggleDebug,
  }
)(
  class App extends React.Component {
    render() {
      return (
        <>
          <NavBar hiddenBtn={this.props.toggleDebug} />
          <div className="container">
            <Router>
              <Pagination />
              <Switch>
                {navigation.map((item) => {
                  return (
                    <Route
                      exact
                      path={item.path}
                      component={item.component}
                      key={`route-${item.index}`}
                    />
                  );
                })}
              </Switch>
            </Router>
          </div>

          {this.props.state.app.debug ? (
            <Debug state={this.props.state} />
          ) : null}
        </>
      );
    }
  }
);
