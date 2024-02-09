import React from "react";
import Dropdown from "../Dropdown";

const Filters = () => {
  const industryOptions = ["Health care", "Technology", "Finance"];
  const marketOptions = ["Small cap", "Mid cap", "Large cap"];
  const riskOptions = ["Low risk", "Mid risk", "High risk"];

  return (
    <div className="filters">
      <h2 className="filters-heading">Filters</h2>
      <Dropdown
        options={industryOptions}
        defaultOption="Health care"
        label="Industry"
      />
      <Dropdown
        options={marketOptions}
        defaultOption="Large-cap"
        label="Market Cap"
      />
      <Dropdown options={riskOptions} defaultOption="Low risk" label="Risk" />
      <div className="filters-btn-container">
        <button className="filters-btn">Apply Filters</button>
      </div>
    </div>
  );
};

export default Filters;
