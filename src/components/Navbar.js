import React, { useState } from "react";

const Navbar = () => {
  const navItems = [
    { label: "Trading", disabled: true },
    { label: "Automation", disabled: true },
    { label: "Portfolio", disabled: true },
    { label: "Alerts", disabled: false },
    { label: "Training", disabled: false },
  ];
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    if (!navItems[index].disabled) {
      setActive(index);
    }
  };

  return (
    <div className="nav-container navbar">
      {navItems.map((item, index) => (
        <React.Fragment key={index}>
          <h1
            className={`nav-item${item.disabled ? " disabled" : ""}${
              index === active ? " active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {item.disabled && <span className="coming-soon">Coming Soon</span>}
            {item.label}
          </h1>
          {index !== navItems.length - 1 && <hr className="separator" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Navbar;
