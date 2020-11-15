import React from "react";
import { connect } from "react-redux";
import { forEach, find } from "lodash";

import PageTitle from "app/common/components/pagetitle";
import PlansForm from "./plansForm";
import { setPlans } from "./plansSlice";
import { servicesPage as nextPage } from "app/data/navigation";
import plansList from "app/data/plans";

import BasicImage from "assets/basic.png";
import EnhancedImage from "assets/enhanced.png";
import MobileFirstImage from "assets/mobile_first.png";

export default connect(
  (state) => ({
    form: state.form.plans,
  }),
  { setPlans }
)(
  class PlansPage extends React.Component {
    handleSubmit(data) {
      this.props.setPlans(data);
      this.props.history.push(nextPage.path);
    }

    render() {
      const images = {
        basic: BasicImage,
        enhanced: EnhancedImage,
        mobile_first: MobileFirstImage,
      };

      let selectedPlan = plansList[0];
      if (this.props.form && this.props.form.values) {
        selectedPlan = find(plansList, {
          value: this.props.form.values.selectedPlan,
        });
      }
      console.log(this.props, selectedPlan);

      return (
        <>
          <PageTitle
            main="Redefine your client experience"
            secondary="Simple plans that fit your business"
          />
          <div className="row main-columns">
            <div className="col-md-6 col-left">
              <PlansForm onSubmit={this.handleSubmit.bind(this)} />
            </div>

            <div className="col-md-6 col-right">
              <img className="plan-image" src={images[selectedPlan.value]} />
            </div>
          </div>
        </>
      );
    }
  }
);
