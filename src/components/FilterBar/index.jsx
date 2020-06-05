import React from "react";

import "./styles.scss";

const FilterBar = () => {
  return (
    <div className="filterBar">
      <div className="filterBar__content">
        <p>Filtrar por:</p>
        <div className="filterBar__buttons-container">
          <button className="filterBar__button">Menor preço</button>
          <button className="filterBar__button">Maior preço</button>
        </div>
      </div>

      <div className="filterBar__quantity-products">
        <span>22 items</span>
      </div>
    </div>
  );
};

export default FilterBar;
