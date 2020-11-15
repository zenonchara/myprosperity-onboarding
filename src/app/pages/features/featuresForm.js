import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import featuresList from "app/data/features";
import { RadioGroup } from "app/common/forms/radioGroup";

class FeaturesForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    const options = [
      { label: "Low", value: "low" },
      { label: "Med", value: "medium" },
      { label: "High", value: "high" },
    ];

    return (
      <form onSubmit={handleSubmit}>
        {featuresList.map((featureSet) => {
          return (
            <div className="feature-radio-group" key={featureSet.value}>
              <div className="feature-radio-group-label">
                {featureSet.label}
              </div>
              <RadioGroup
                options={options}
                name={featureSet.value}
                classes="feature-radio-group-options"
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

FeaturesForm = reduxForm({
  form: "features", // a unique name for this form
})(FeaturesForm);

FeaturesForm = connect(
  (state) => ({
    initialValues: state.features,
  }),
  {}
)(FeaturesForm);

export default FeaturesForm;
