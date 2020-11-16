import React from "react";
import { connect } from "react-redux";
import { fetch } from "whatwg-fetch";
import { map } from "lodash";

import PageTitle from "app/common/components/pagetitle";
import image from "assets/partner-dashboard-laptop-mp 1.png";

import { partnerDashboardUrl, postUrl } from "app/data/http";

import { featuresPage as nextPage } from "app/data/navigation";

export default connect(
  (state) => ({
    state,
  }),
  {}
)(
  class DemoPage extends React.Component {
    constructor() {
      super();

      this.defaultState = {
        loading: false,
      };

      this.state = this.defaultState;
    }

    handleClick() {
      this.props.history.push(nextPage.path);

      // const state = this.props.state;

      // let logoParsed = "";
      // if (state.contact.logo) {
      //   logoParsed = JSON.parse(state.contact.logo);
      // }

      // const servicesArray = map(state.services, (value, service) => {
      //   if (value) {
      //     return service;
      //   }
      // });

      // const featuresArray = map(state.features, (value, feature) => {
      //   if (value) {
      //     return feature;
      //   }
      // });

      // const integrationsArray = map(
      //   state.integrations,
      //   (value, integration) => {
      //     if (value) {
      //       return integration;
      //     }
      //   }
      // );

      // const postData = {
      //   contact: {
      //     ...state.contact,
      //     logo: logoParsed,
      //   },
      //   firm: state.firm,
      //   services: servicesArray,
      //   features: featuresArray,
      //   integrations: integrationsArray,
      // };

      // console.debug(postData);

      // this.setState({ loading: true });
      // fetch(postUrl, {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(postData),
      // }).then(() => {
      //   this.setState({ loading: false });
      //   window.location = partnerDashboardUrl;
      // });
    }

    render() {
      const { loading } = this.state;

      return (
        <>
          <PageTitle
            main="We're all set"
            secondary="Let's explore your dashboard"
          />

          <div className="text-center mt-3 mb-5">
            <img src={image} />
          </div>

          <button
            type="button"
            className="btn btn-dark btn-Next"
            onClick={this.handleClick.bind(this)}
          >
            {loading ? (
              <span className="fal fa-spinner fa-spin"></span>
            ) : (
              <span>Next</span>
            )}
          </button>
        </>
      );
    }
  }
);
