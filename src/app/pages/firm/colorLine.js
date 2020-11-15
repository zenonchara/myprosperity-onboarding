import React from "react";

export default class FeatureLine extends React.Component {
  render() {
    const { fillColor } = this.props;

    return (
      <svg
        className="count-line"
        width="115"
        height="100"
        viewBox="0 0 115 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 57.5355C0 25.7533 25.7324 0 57.5 0C89.2676 0 115 25.7533 115 57.5355C115 73.5496 108.479 87.9602 97.9556 98.4102C96.3881 99.9668 93.8554 99.9579 92.2988 98.3904C90.7422 96.8228 90.751 94.2902 92.3186 92.7336C101.399 83.716 107 71.3215 107 57.5355C107 30.1666 84.8443 8 57.5 8C30.1557 8 8 30.1666 8 57.5355C8 70.7681 13.1882 82.7507 21.5734 91.627C23.0905 93.2329 23.0185 95.7645 21.4126 97.2815C19.8067 98.7986 17.2751 98.7266 15.758 97.1207C6.03557 86.829 0 72.905 0 57.5355Z"
          fill={fillColor}
        />
      </svg>
    );
  }
}
