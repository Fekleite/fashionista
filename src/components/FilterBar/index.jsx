import React from "react";

import "./styles.scss";

const FilterBar = ({ length }) => {
  return (
    <div className="filterBar">
      <div className="filterBar__quantity-products">
        <span>{length} items</span>
      </div>
    </div>
  );
};

export default FilterBar;
