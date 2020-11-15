import React from "react";
import { connect } from "react-redux";
import PageTitle from "app/common/components/pageTitle";

import { setContact } from "./contactSlice";
import ContactForm from "./contactForm";
import DevicePreview from "./devicePreview.js";
import { firmPage as nextPage } from "app/data/navigation";

export default connect(
  (state) => ({
    initialValues: state.contact,
    form: state.form.contact,
  }),
  { setContact }
)(
  class ContactPage extends React.Component {
    handleSubmit(data) {
      this.props.setContact(data);
      this.props.history.push(nextPage.path);
    }

    render() {
      return (
        <>
          <PageTitle
            main="Your own client wealth portal"
            secondary="Customised for your firm"
          />
          <div className="row main-columns">
            <div className="col-md-6 col-left">
              <ContactForm onSubmit={this.handleSubmit.bind(this)} />
            </div>
            <div className="col-md-6 col-right">
              <DevicePreview />
            </div>
          </div>
        </>
      );
    }
  }
);
