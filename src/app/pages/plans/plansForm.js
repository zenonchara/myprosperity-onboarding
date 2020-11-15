import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import plansList from "app/data/plans";
import { RadioGroup } from "app/common/forms/radioGroup";

class PlansForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <RadioGroup
          options={plansList}
          classes="plans-list"
          name="selectedPlan"
        />
        <button type="Submit" className="btn btn-dark btn-Next">
          Next
        </button>
      </form>
    );
  }
}

PlansForm = reduxForm({
  form: "plans", // a unique name for this form
})(PlansForm);

PlansForm = connect(
  (state) => ({
    initialValues: state.plans,
  }),
  {}
)(PlansForm);

export default PlansForm;
