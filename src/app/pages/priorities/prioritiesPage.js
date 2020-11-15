import React from "react";
import { connect } from "react-redux";
import { forEach, find } from "lodash";

import PageTitle from "app/common/components/pagetitle";
import PrioritiesForm from "./prioritiesForm";
import { setPriorities } from "./prioritiesSlice";
import { integrationsPage as nextPage } from "app/data/navigation";

export default connect(
  (state) => ({
    initialValues: state.priorities,
    form: state.form.priorities,
  }),
  { setPriorities }
)(
  class PrioritiesPage extends React.Component {
    handleSubmit(data) {
      this.props.setPriorities(data);
      this.props.history.push(nextPage.path);
    }

    render() {

      return (
        <>
          <PageTitle
            main="Priorities to help you reach your goals"
            secondary="For you, your staff and your clients"
          />
          <div className="row main-columns">
            <div className="col-md-8 offset-md-2">
              <PrioritiesForm onSubmit={this.handleSubmit.bind(this)} />
            </div>
          </div>
        </>
      );
    }
  }
);
