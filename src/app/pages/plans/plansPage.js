import React from "react";
import { connect } from "react-redux";
import { forEach, find } from "lodash";

import PageTitle from "app/common/components/pagetitle";
import PlansForm from "./plansForm";
import { setPlans } from "./plansSlice";

import { finalPage as nextPage } from "app/data/navigation";

import plansList from "app/data/plans";

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

      let selectedPlan = plansList[0];
      if (this.props.form && this.props.form.values) {
        selectedPlan = find(plansList, {
          value: this.props.form.values.selectedPlan,
        });
      }

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

              <div className="pricing-plan">
                <span className={`plan-icon fal fa-${selectedPlan.icon}`}></span>
                <h3>{selectedPlan.label}</h3>

                {selectedPlan.price ? (
                  <div className="div_pricing_connect" >
                    <span className="txt_dollar navy_color">$</span>
                    <span className="txt_pricing navy_color" >{selectedPlan.price}</span>
                      <span className="txt_month navy_color" >/month +GST</span>
                  </div>
                ):(
                  <div className="div_pricing_connect text-center" >
                    <span className="txt_pricing navy_color text-center" >POA</span>
                  </div>
                )}

                <ul>
                  {selectedPlan.items.map((text, index) => {
                    return (
                      <li key={index}>{text}</li>
                    )
                  })}
                </ul>
              </div>

            </div>
          </div>
        </>
      );
    }
  }
);
