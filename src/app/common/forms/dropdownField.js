import React from "react";
import { Field } from "redux-form";

class SelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {
      input: { onChange },
    } = this.props;
    onChange(event.target.value);
  }

  render() {
    const {
      options,
      input: { value, onChange },
    } = this.props;

    return (
      <>
        <select
          className="form-control"
          id={`${this.props.id}`}
          onChange={onChange}
        >
          {options.map((option) => {
            return (
              <option value={option.value} key={`key-${option.value}`}>
                {option.label}
              </option>
            );
          })}
        </select>
        <div className="error"></div>
      </>
    );
  }
}

export class DropdownField extends React.Component {
  render() {
    return (
      <Field
        component={SelectInput}
        type="select"
        className="form-control"
        id={`input-${this.props.id}`}
        options={this.props.options}
        name={this.props.name}
      />
    );
  }
}
