import React from "react";
import dollar from "../assets/img/dollar.png";
import risk from "../assets/img/risk.png";
import volume from "../assets/img/volume.png";
import contract from "../assets/img/contract.png";

const AccordionItem = ({ announcement, stats, isOpen, onClick }) => {
  return (
    <div className={`wrapper ${isOpen ? "active" : ""}`} onClick={onClick}>
      <div className="stats-container">
        <div className="stats-content">
          <div className="stats-item">
            <img src={dollar} alt="dollar" />
            <p>{stats.money}</p>
          </div>
          <hr className="stats-separator" />
          <div className="stats-item">
            <img src={contract} alt="contracts" />
            <p>{stats.contracts}</p>
          </div>
          <hr className="stats-separator" />
          <div className="stats-item">
            <img src={volume} alt="volume" />
            <p>{stats.volume}</p>
          </div>
          <hr className="stats-separator" />
          <div className="stats-item">
            <img src={risk} alt="risk" />
            <p>{stats.risk}</p>
          </div>
        </div>
      </div>
      <button className="announcement-container">
        <p className="announcement-content">{announcement}</p>
      </button>
    </div>
  );
};

export default AccordionItem;
