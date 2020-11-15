import React from "react";
import { connect } from "react-redux";
import { reduce } from "lodash";

import PageTitle from "app/common/components/pagetitle";
import IntegrationsForm from "./integrationsForm";
import { setIntegrations } from "./integrationsSlice";
import { demoPage as nextPage } from "app/data/navigation";

export default connect(
  (state) => ({
    initialValues: state.integrations,
    form: state.form.integrations,
  }),
  { setIntegrations }
)(
  class IntegrationsPage extends React.Component {
    handleSubmit(data) {
      this.props.setIntegrations(data);
      this.props.history.push(nextPage.path);
    }

    render() {
      let selectedCount = 0;
      if (this.props.form) {
        const formValues = this.props.form.values;
        selectedCount = reduce(
          formValues,
          (result, value) => {
            return (result += value ? 1 : 0);
          },
          0
        );
      }

      return (
        <>
          <PageTitle
            main="Bringing together the technology you already use"
            secondary="All of your existing client data, seamlessly integrated"
          />
          <IntegrationsForm onSubmit={this.handleSubmit.bind(this)} />
          {selectedCount > 0 ? (
            <div className="small text-muted mt-2 text-center">
              {selectedCount} selected{" "}
            </div>
          ) : null}
        </>
      );
    }
  }
);
