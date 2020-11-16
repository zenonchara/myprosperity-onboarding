import React from "react";
import { connect } from "react-redux";
import { reduce } from "lodash";

import PageTitle from "app/common/components/pagetitle";
import ServicesForm from "./servicesForm";
import { setServices } from "./servicesSlice";
import { prioritiesPage as nextPage } from "app/data/navigation";

export default connect(
  (state) => ({
    initialValues: state.services,
    form: state.form.services,
  }),
  { setServices }
)(
  class ServicesPage extends React.Component {
    handleSubmit(data) {
      this.props.setServices(data);
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
            main="Uncover opportunities from the services you offer"
            secondary="Keep track of services asked for, and opportunities fulfilled"
          />
          <ServicesForm onSubmit={this.handleSubmit.bind(this)} />
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
