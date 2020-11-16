import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { sortBy } from "lodash";

import servicesList from "app/data/services";
import { CheckboxGroup } from "app/common/forms/checkboxGroup";

class ServicesForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    const sortedServicesList = sortBy(servicesList, service => service.type !== this.props.firmType);

    return (
      <form onSubmit={handleSubmit}>
        <CheckboxGroup
          options={sortedServicesList}
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
