import React from "react";
import { Field } from "redux-form";

import clientValues from "app/data/clientValues";

class AmountInput extends React.Component {
  render() {
    const {
      type,
      input: { value, onChange },
      meta: { touched, error, warning },
    } = this.props;

    return (
      <>
        <input
          type="number"
          className="form-control"
          value={value}
          id={`${this.props.id}`}
          onChange={onChange}
        />
        {touched && error && (
          <small className="form-text text-danger">{error}</small>
        )}
        <div className="amount-shortcut-list">
          <button className="amount-shortcut" type="button" onClick={() => {onChange(clientValues.lowNetWorth)}}>L</button>
          <button className="amount-shortcut" type="button" onClick={() => {onChange(clientValues.mediumNetWorth)}}>M</button>
          <button className="amount-shortcut" type="button" onClick={() => {onChange(clientValues.highNetWorth)}}>H</button>
        </div>
      </>
    );
  }
}

export class AmountField extends React.Component {
  render() {
    return (
      <Field
        component={AmountInput}
        type={this.props.type}
        className="form-control"
        id={`input-${this.props.id}`}
        name={this.props.name}
      />
    );
  }
}
