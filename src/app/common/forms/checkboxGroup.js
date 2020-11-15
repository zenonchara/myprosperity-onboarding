import React from "react";
import { CheckboxField } from "./checkboxField";

export class CheckboxGroup extends React.Component {
  render() {
    return (
      <div className={`checkbox-group mb-5 ${this.props.classes}`}>
        {this.props.options.map((option) => {
          return (
            <CheckboxField
              id={option.value}
              key={`key-${option.value}`}
              {...option}
            />
          );
        })}
      </div>
    );
  }
}
