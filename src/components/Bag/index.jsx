import React from "react";
import { FiFrown, FiArrowLeft } from "react-icons/fi";

import "./styles.scss";

const Bag = ({ handleBag }) => {
  return (
    <div className="bag">
      <header className="bag__header">
        <div className="bag__header-group">
          <button className="bag__button" onClick={handleBag}>
            <FiArrowLeft size={24} color="#121111" />
          </button>

          <div className="bag__title">
            <h3>Sacola</h3>
          </div>
        </div>
      </header>
      <div className="bag__products--empty">
        <p>Sua sacola está vazia</p>
        <FiFrown size={20} color="#393939" />
      </div>
      <footer className="bag__footer">
        <h3>Subtotal: R$</h3>
      </footer>
    </div>
  );
};

export default Bag;
