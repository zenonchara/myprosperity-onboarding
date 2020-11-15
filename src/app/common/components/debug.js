import React from "react";

export default class Debug extends React.Component {
  render() {
    return (
      <pre className="debug-data">
        {JSON.stringify(this.props.state, null, 2)}
      </pre>
    );
  }
}
