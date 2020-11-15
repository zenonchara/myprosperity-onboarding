import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import {
  baseLogoPath,
  accountingIntegrations,
  financialIntegrations,
} from "app/data/integrations";
import { CheckboxGroup } from "app/common/forms/checkboxGroup";

class IntegrationsForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    const { firmType } = this.props;

    let integrationsList = accountingIntegrations;
    if (firmType === "financialService") {
      integrationsList = financialIntegrations;
    } else if (firmType === "multidisciplinary") {
      integrationsList = accountingIntegrations.concat(financialIntegrations);
    }

    const options = integrationsList.map((integration) => {
      integration.imageUrl = `${baseLogoPath}${integration.logoUrl}`;
      return integration;
    });

    return (
      <form onSubmit={handleSubmit}>
        <CheckboxGroup options={options} classes="checkbox-group-columns" />
        <button type="Submit" className="btn btn-dark btn-Next">
          Next
        </button>
      </form>
    );
  }
}

IntegrationsForm = reduxForm({
  form: "integrations", // a unique name for this form
})(IntegrationsForm);

IntegrationsForm = connect(
  (state) => ({
    initialValues: state.integrations,
    firmType: state.firm.firmType,
  }),
  {}
)(IntegrationsForm);

export default IntegrationsForm;
