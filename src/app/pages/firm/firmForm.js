import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import { FormGroup } from "../../common/forms/formGroup";

class FirmForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    const fields = [
      {
        id: "firmType",
        label: "Type of business",
        type: "select",
        options: [
          { label: "Financial Services", value: "financialService" },
          { label: "Accounting", value: "accounting" },
          { label: "Multidisciplinary", value: "multidisciplinary" },
        ],
      },
      {
        id: "clientCount",
        label: "No. of client groups/households (approx)",
        type: "number",
      },
      {
        id: "staffCount",
        label: "No. of staff (approx)",
        type: "number",
      },
      {
        id: "totalRevenue",
        label: "Total annual revenue (approx)",
        type: "number",
      },
      {
        id: "avgClientWorth",
        label: "Average client net worth (approx)",
        type: "amount",
      },
    ];

    return (
      <form onSubmit={handleSubmit}>
        {fields.map((data) => {
          return (
            <FormGroup
              key={`key-${data.id}`}
              name={data.id}
              {...data}
            ></FormGroup>
          );
        })}

        <button type="Submit" className="btn btn-dark btn-Next">
          Next
        </button>
      </form>
    );
  }
}

FirmForm = reduxForm({
  form: "firm", // a unique name for this form
})(FirmForm);

FirmForm = connect(
  (state) => ({
    initialValues: state.firm,
  }),
  {}
)(FirmForm);

export default FirmForm;
