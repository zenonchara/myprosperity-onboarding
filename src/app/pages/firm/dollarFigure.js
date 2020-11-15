import React from "react";

import FeatureLine from "./colorLine";

export default class DollarFigure extends React.Component {
  render() {
    const { number, color, description } = this.props;

    return (
      <div className={`dollar-figure ${number ? "has-number" : "no-number"}`}>
        <FeatureLine fillColor={color} />
        <div className="dollar-figure-amount">{number || "???"}</div>
        <div className="dollar-figure-description small text-muted">
          {description}
        </div>
      </div>
    );
  }
}
