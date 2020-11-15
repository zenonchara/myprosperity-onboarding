import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import { FormGroup } from "../../common/forms/formGroup";

const fields = [
  {
    id: "businessName",
    label: "Company name",
    type: "text",
  },
  {
    id: "contactName",
    label: "Contact",
    type: "text",
  },
  {
    id: "email",
    label: "Contact email",
    type: "email",
  },
  {
    id: "website",
    label: "Website",
    type: "text",
  },
  {
    id: "logo",
    label: "Company logo",
    type: "image",
  },
  {
    id: "headerBackground",
    label: "Logo background",
    type: "select",
    options: [
      { label: "Light", value: "light" },
      { label: "Dark", value: "dark" },
    ],
  },
];

const validateForm = function (values) {
  const errors = {};
  fields.forEach((field) => {
    if (!values[field.id]) {
      errors[field.id] = "Required";
    }
  });
  if (values.email) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  }
  if (values.website) {
    var urlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(urlPattern);
    if (!values.website.match(regex)) {
      errors.website = "Invalid URL";
    }
  }
  return errors;
};

class ContactForm extends React.Component {
  render() {
    const { handleSubmit, valid } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        {fields.map((data) => {
          return (
            <FormGroup
              {...data}
              id={data.id}
              label={data.label}
              type={data.type}
              key={`key-${data.id}`}
              name={data.id}
              validate={data.validate}
            ></FormGroup>
          );
        })}
        <button
          disabled={!valid}
          type="Submit"
          className="btn btn-dark btn-Next"
        >
          Next
        </button>
      </form>
    );
  }
}

ContactForm = reduxForm({
  form: "contact",
  validate: validateForm,
})(ContactForm);

ContactForm = connect(
  (state) => ({
    initialValues: state.contact,
  }),
  {}
)(ContactForm);

export default ContactForm;
