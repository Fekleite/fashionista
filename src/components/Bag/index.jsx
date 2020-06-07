import React, { useState, useEffect } from "react";
import { FiFrown, FiArrowLeft } from "react-icons/fi";

import "./styles.scss";

import BagCard from "../BagCard";

const Bag = ({ handleBag }) => {
  const [bag, setBag] = useState(0);

  return (
    <div className="bag">
      <header className="bag__header">
        <div className="bag__header-group">
          <button className="bag__button" onClick={handleBag}>
            <FiArrowLeft size={24} color="#f2f2f2" />
          </button>

          <div className="bag__title">
            <h3>Sacola</h3>
          </div>
        </div>
      </header>

      {bag === 0 ? (
        <div className="bag__products--empty">
          <p>Sua sacola está vazia</p>
          <FiFrown size={20} color="#393939" />
        </div>
      ) : (
        <div className="bag__products">
          <BagCard />
          <BagCard />
          <BagCard />
          <BagCard />
          <BagCard />
        </div>
      )}

      <footer className="bag__footer">
        <h3>Subtotal: R$</h3>
      </footer>
    </div>
  );
};

export default Bag;
