import React from "react";
import { Field } from "redux-form";

class CheckboxInput extends React.Component {
  render() {
    const {
      label,
      id,
      input: { value, onChange },
    } = this.props;

    const hasImage = this.props.imageUrl !== undefined;
    const imageClass = hasImage ? "custom-checkbox-with-image" : "";

    return (
      <>
        <label className={`custom-control custom-checkbox ${imageClass}`}>
          <input
            type="checkbox"
            className="custom-control-input"
            value={value}
            checked={value}
            id={`checkbox-${id}`}
            onChange={onChange}
          />
          <div className="custom-control-label">
            {hasImage ? (
              <img className="checkbox-icon" src={this.props.imageUrl} />
            ) : null}
            {label}
          </div>
        </label>
      </>
    );
  }
}

export class CheckboxField extends React.Component {
  render() {
    return (
      <Field
        id={`input-${this.props.id}`}
        name={this.props.id}
        component={CheckboxInput}
        {...this.props}
      />
    );
  }
}
