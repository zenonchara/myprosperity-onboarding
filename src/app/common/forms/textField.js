import React from "react";
import { Field } from "redux-form";

class TextInput extends React.Component {
  render() {
    const {
      type,
      input: { value, onChange },
      meta: { touched, error, warning },
    } = this.props;

    return (
      <>
        <input
          type={type}
          className="form-control"
          value={value}
          id={`${this.props.id}`}
          onChange={onChange}
        />
        {touched && error && (
          <small className="form-text text-danger">{error}</small>
        )}
      </>
    );
  }
}

export class TextField extends React.Component {
  render() {
    return (
      <Field
        component={TextInput}
        type={this.props.type}
        className="form-control"
        id={`input-${this.props.id}`}
        name={this.props.name}
      />
    );
  }
}
