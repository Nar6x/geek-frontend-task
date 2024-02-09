import React from "react";
import Filters from "../components/alerts/Filters";
import Content from "../components/alerts/Content";

const Alerts = () => {
  return (
    <div className="alerts-container">
      <div className="alerts-content">
        <div className="filters-container">
          <Filters />
        </div>
        <div className="content-container">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Alerts;
