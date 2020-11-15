import React from "react";
import { Field } from "redux-form";

const {
  Component: { input },
} = React;

export class RadioGroup extends React.Component {
  render() {
    return (
      <div className={`radio-group ${this.props.classes}`}>
        {this.props.options.map((option) => {
          return (
            <label
              className={`custom-control custom-radio option-${option.value}`}
              key={`key-${option.value}`}
            >
              <Field
                name={this.props.name}
                component="input"
                className="custom-control-input"
                type="radio"
                value={option.value}
              />
              <div className="custom-control-label">{option.label}</div>
            </label>
          );
        })}
      </div>
    );
  }
}
