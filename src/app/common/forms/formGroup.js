import React from "react";
import { DropdownField } from "./dropdownField";
import { TextField } from "./textField";
import { AmountField } from "./amountField";
import { ImageField } from "./imageField";

export class FormGroup extends React.Component {
  getInput() {
    if (!this.props.type) {
      return this.props.children;
    }

    switch (this.props.type) {
      case "dropdown":
      case "select":
        return (
          <DropdownField
            id={this.props.id}
            name={this.props.name}
            options={this.props.options}
          />
        );
      case "image":
        return (
          <ImageField
            id={this.props.id}
            name={this.props.name}
            options={this.props.options}
          />
        );
      case "amount":
        return (
          <AmountField
            id={this.props.id}
            name={this.props.name}
            options={this.props.options}
          />
        );
      default:
        return (
          <TextField
            id={this.props.id}
            name={this.props.name}
            type={this.props.type}
            required={this.props.required}
          />
        );
    }
  }

  render() {
    return (
      <div className="form-group" id={`group-${this.props.id}`}>
        <label htmlFor={`input-${this.props.id}`}>{this.props.label}</label>
        {this.getInput()}
      </div>
    );
  }
}
