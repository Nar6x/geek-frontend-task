import React from "react";
import Filters from "./alerts/Filters";
import Content from "./alerts/Content";

const AlertsContent = () => {
  return (
    <div className="alerts-container">
      <div className="alerts-content">
        <div className="filters-container">
          <Filters />
        </div>
        <Content />
      </div>
    </div>
  );
};

export default AlertsContent;
