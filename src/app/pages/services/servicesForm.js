import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import servicesList from "app/data/services";
import { CheckboxGroup } from "app/common/forms/checkboxGroup";

class ServicesForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <CheckboxGroup
          options={servicesList}
          classes="checkbox-group-columns"
        />
        <button type="Submit" className="btn btn-dark btn-Next">
          Next
        </button>
      </form>
    );
  }
}

ServicesForm = connect(
  (state) => ({
    initialValues: state.services,
    firmType: state.firm.firmType,
  }),
  {}
)(
  reduxForm({
    form: "services", // a unique name for this form
  })(ServicesForm)
);

export default ServicesForm;
