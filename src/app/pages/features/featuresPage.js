import React from "react";
import { connect } from "react-redux";
import { forEach, find } from "lodash";

import PageTitle from "app/common/components/pagetitle";
import FeaturesForm from "./featuresForm";
import { setFeatures } from "./featuresSlice";
import { integrationsPage as nextPage } from "app/data/navigation";
import featuresList from "app/data/features";

function FeatureList(props) {
  if (!props.features.length) {
    return null;
  }

  return (
    <ul className="fa-ul feature-list mb-5" style={{ color: props.color }}>
      {props.features.map((feature) => {
        return (
          <li key={feature.key}>
            <span className="fa-li">
              <i className={`fal fa-${feature.icon}`}></i>
            </span>
            {feature.label}
          </li>
        );
      })}
    </ul>
  );
}

export default connect(
  (state) => ({
    initialValues: state.features,
    form: state.form.features,
  }),
  { setFeatures }
)(
  class FeaturesPage extends React.Component {
    handleSubmit(data) {
      this.props.setFeatures(data);
      this.props.history.push(nextPage.path);
    }

    render() {
      let lowFeatures = [];
      let medFeatures = [];
      let highFeatures = [];

      let formValues = {};

      if (this.props.form && this.props.form.values) {
        formValues = this.props.form.values;
        forEach(featuresList, (featureSet) => {
          if (formValues[featureSet.value] === "low") {
            lowFeatures = lowFeatures.concat(featureSet.features);
          } else if (formValues[featureSet.value] === "medium") {
            medFeatures = medFeatures.concat(featureSet.features);
          } else if (formValues[featureSet.value] === "high") {
            highFeatures = highFeatures.concat(featureSet.features);
          }
        });
      }

      const colors = {
        high: "#3dabc9",
        medium: "#39bab6",
        low: "#6c757d",
      };

      return (
        <>
          <PageTitle
            main="Features to help you reach your goals"
            secondary="For you, your staff and your clients"
          />
          <div className="row main-columns">
            <div className="col-md-6 col-left">
              <FeaturesForm onSubmit={this.handleSubmit.bind(this)} />
            </div>
            <div className="col-md-6 col-right">
              <FeatureList color={colors.high} features={highFeatures} />
              <FeatureList color={colors.medium} features={medFeatures} />
              <FeatureList color={colors.low} features={lowFeatures} />
            </div>
          </div>
        </>
      );
    }
  }
);
