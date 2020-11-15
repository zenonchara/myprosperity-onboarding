import React from "react";

import { Link, withRouter } from "react-router-dom";

import navigation from "app/data/navigation";

export default withRouter(
  class Pagination extends React.Component {
    render() {
      const currentPage = this.props.location;

      return (
        <ul className="pagination mb-3">
          {navigation.map((item) => {
            const currentClass =
              item.path === currentPage.pathname ? "active" : "";

            return (
              <li key={`li-${item.index}`} className="pagination-item">
                <Link
                  to={item.path}
                  className={`pagination-link ${currentClass}`}
                >
                  <div className="tooltip bs-tooltip-top pagination-label">
                    <div className="tooltip-inner">{item.label}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
  }
);
