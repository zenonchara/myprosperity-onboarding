import React from "react";
import { connect } from "react-redux";
import { forEach, find } from "lodash";

import PageTitle from "app/common/components/pagetitle";

import { setFeatures } from "./featuresSlice";
import { planPage as nextPage } from "app/data/navigation";
import featuresList from "app/data/features";

function FeatureList(props) {
  if (!props.features.length) {
    return null;
  }

  return (
    <ul className="list-unstyled feature-list" style={{ color: props.color }}>
      {props.features.map((feature) => {
        return (
          <li key={feature.key}>
            <i className={`fal fa-${feature.icon}`}></i>
            <span className="feature-label">
              {feature.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default connect(
  (state) => ({
    initialValues: state.features,
    priorities: state.priorities,
    form: state.form.features,
  }),
  { setFeatures }
)(
  class FeaturesPage extends React.Component {

    handleSubmit(data) {
      this.props.history.push(nextPage.path);
    }

    render() {
      let lowFeatures = [];
      let medFeatures = [];
      let highFeatures = [];

      const priorities = this.props.priorities;

      forEach(featuresList, (featureSet) => {
        if (priorities[featureSet.value] === "low") {
          lowFeatures = lowFeatures.concat(featureSet.features);
        } else if (priorities[featureSet.value] === "medium") {
          medFeatures = medFeatures.concat(featureSet.features);
        } else if (priorities[featureSet.value] === "high") {
          highFeatures = highFeatures.concat(featureSet.features);
        }
      });

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
          <div className="">
              <FeatureList color={colors.high} features={highFeatures} />
              <FeatureList color={colors.medium} features={medFeatures} />
              <FeatureList color={colors.low} features={lowFeatures} />
          </div>
          <button type="button" className="btn btn-dark btn-Next mt-4" onClick={this.handleSubmit.bind(this)}>
            Next
          </button>
        </>
      );
    }
  }
);
