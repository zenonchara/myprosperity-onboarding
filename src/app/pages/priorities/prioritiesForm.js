import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import featuresList from "app/data/features";
import { RadioGroup } from "app/common/forms/radioGroup";

class PrioritiesForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    const options = [
      { label: "Low", value: "low" },
      { label: "Med", value: "medium" },
      { label: "High", value: "high" },
    ];

    return (
      <form onSubmit={handleSubmit}>
        {featuresList.map((prioritySet) => {
          return (
            <div className="priority-radio-group" key={prioritySet.value}>
              <div className="priority-radio-group-label">
                {prioritySet.label}
              </div>
              <RadioGroup
                options={options}
                name={prioritySet.value}
                classes="priority-radio-group-options"
              />
            </div>
          );
        })}
        <button type="Submit" className="btn btn-dark btn-Next mt-4">
          Next
        </button>
      </form>
    );
  }
}

PrioritiesForm = reduxForm({
  form: "priorities", // a unique name for this form
})(PrioritiesForm);

PrioritiesForm = connect(
  (state) => ({
    initialValues: state.priorities,
  }),
  {}
)(PrioritiesForm);

export default PrioritiesForm;
