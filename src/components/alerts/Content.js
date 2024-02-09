import React, { useState } from "react";
import AccordionItem from "../AccordionItem";
import { data } from "../../data/AccordionData";

const Content = () => {
  const [active, setActive] = useState(null);

  const handleItemClick = (index) => {
    setActive((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          announcement={item.announcement}
          stats={item.stats}
          isOpen={active === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Content;
