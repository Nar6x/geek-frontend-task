import React, { useState } from "react";

const Dropdown = ({ options, defaultOption, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHoveredIndex(0);
    }
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="input-group">
      <h2>{label}</h2>
      <div className="dropdown-wrapper">
        <div className="dropdown" onClick={toggleDropdown}>
          <div className={`dropdown-input ${isOpen ? "rotate-arrow" : ""}`}>
            {selectedOption}
          </div>
          <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
            <ul>
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                  className={`${
                    isOpen && hoveredIndex === index ? "focused" : ""
                  } ${selectedOption === option ? "selected-option" : ""}`}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <span>Choose something.</span>
    </div>
  );
};

export default Dropdown;
