import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";

import PageTitle from "app/common/components/pageTitle";

import FirmForm from "./firmForm";
import { setFirm } from "./firmSlice";
import DollarFigure from "./dollarFigure";
import clientValues from "app/data/clientValues";
import { servicesPage as nextPage } from "app/data/navigation";

export default connect(
  (state) => ({
    initialValues: state.firm,
    form: state.form.firm,
  }),
  { setFirm }
)(
  class FirmPage extends React.Component {
    handleSubmit(data) {
      this.props.setFirm(data);
      this.props.history.push(nextPage.path);
    }

    formatNumber(value) {
      return numeral(value).format("$0a").toLocaleUpperCase();
    }

    render() {
      const {
        debtAssetRatio,
      } = clientValues;

      let clientCount = 0;
      let avgPerClient = 0;
      let totalRevenue = 0;
      let avgNetWorthPerClient = 0;

      if (this.props.form) {
        avgPerClient = this.props.form.values.avgPerClient;
        totalRevenue = this.props.form.values.totalRevenue;
        clientCount = this.props.form.values.clientCount;
        avgNetWorthPerClient = this.props.form.values.avgClientWorth;
      }


      let totalManaged, totalDebts, revenuePerHoushold;
      if (clientCount) {
        revenuePerHoushold = this.formatNumber(totalRevenue / clientCount);
        totalManaged = this.formatNumber(clientCount * avgNetWorthPerClient / debtAssetRatio);
        totalDebts = this.formatNumber(clientCount * avgNetWorthPerClient / (1/debtAssetRatio)*2);
        console.log(this.formatNumber(clientCount * avgNetWorthPerClient), totalManaged, totalDebts)
      }

      const colors = ["#6EB6CA", "#275C7B", "#39BCB8"];
      const defaultColor = "#88949C";

      return (
        <>
          <PageTitle
            main="Get the most out of the data you already have"
            secondary="All of your client’s data, in one place, ready for you to use"
          />
          <div className="row main-columns">
            <div className="col-md-6 col-left">
              <div className="mt-md-4">
                <FirmForm onSubmit={this.handleSubmit.bind(this)} />
              </div>
            </div>

            <div className="col-md-6 col-right text-center">
              <div className="row mt-md-5">
                <div className="col">
                  <DollarFigure
                    color={clientCount ? colors[0] : defaultColor}
                    description="Total managed assets"
                    number={totalManaged}
                  />
                </div>
                <div className="col">
                  <DollarFigure
                    color={clientCount ? colors[1] : defaultColor}
                    description="Total managed loans"
                    number={totalDebts}
                  />
                </div>
                <div className="col">
                  <DollarFigure
                    color={clientCount ? colors[2] : defaultColor}
                    description="Revenue per household"
                    number={revenuePerHoushold}
                  />
                </div>
              </div>

              {clientCount ? (
                <>
                  <p className="small text-muted mt-5">
                    based on myprosperity firms and clients
                  </p>
                </>
              ) : null}
            </div>
          </div>
        </>
      );
    }
  }
);
