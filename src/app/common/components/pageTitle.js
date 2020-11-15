import React from "react";

export default class PageTitle extends React.Component {
  render() {
    const { main, secondary } = this.props;
    return (
      <div className="page-title text-center mb-5">
        <h1>{main}</h1>
        <p>{secondary}</p>
      </div>
    );
  }
}
